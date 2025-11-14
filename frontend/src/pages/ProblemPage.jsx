import React, { use } from 'react'
import { useParams } from 'react-router';
import { PROBLEMS } from '../data/problems';
import { useEffect } from 'react';
import { Panel ,PanelGroup , PanelResizeHandle } from 'react-resizable-panels';
import Navbar from './navBar';
import CodeEditor from '../components/CodeEditor';
import OutPutPanel from '../components/OutPutPanel';
import ProblemDescription from '../components/ProblemDescription';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { codeexecute } from '../lib/piston';
import toast from 'react-hot-toast';
import confetti from "canvas-confetti";

function ProblemPage() {

    const {id}=useParams();
    const navigate=useNavigate();

    const [currentProblemId,setCurrentProblemId]=useState("two-sum")
    const [selectedLanguage,setSelectedLanguage]= useState("javascript")
    const [code , setCode]=useState(PROBLEMS[currentProblemId].starterCode.javascript);
    const [output , setOutput] =useState(null)
    const [isRunning ,setIsRunning]=useState(false)
    
    const currentProblem=PROBLEMS[currentProblemId]


    // update when urlParams changes;
    useEffect(()=>{
        if(id&&PROBLEMS[id]){
            setCurrentProblemId(id);
            setCode(PROBLEMS[id].starterCode[selectedLanguage]);
            setOutput(null);
        }

    },[id,selectedLanguage])

    const handleLanguageChange=(e)=>{
        const newLang=e.target.value;
        setSelectedLanguage(newLang)
        setCode(currentProblem.starterCode[newLang])
        setOutput(null)
    }
    const handleProblemChange=(newProblemId)=>{navigate(`/problems/${newProblemId}`)}
    const triggerConfetti = () => {
        confetti({
          particleCount: 80,
          spread: 250,
          origin: { x: 0.2, y: 0.6 },
        });
    
        confetti({
          particleCount: 80,
          spread: 250,
          origin: { x: 0.8, y: 0.6 },
        });
      };


    const normalizeOutput = (output) => {
        // normalize output for comparison (trim whitespace, handle different spacing)
        return output
          .trim()
          .split("\n")
          .map((line) =>
            line
              .trim()
              // remove spaces after [ and before ]
              .replace(/\[\s+/g, "[")
              .replace(/\s+\]/g, "]")
              // normalize spaces around commas to single space after comma
              .replace(/\s*,\s*/g, ",")
          )
          .filter((line) => line.length > 0)
          .join("\n");
      };

    const checkIfTestsPassed=(actualoutput, expectedOutput)=>{
        const normalizeActual=normalizeOutput(actualoutput)
        const normalzeExpected=normalizeOutput(expectedOutput);
        return normalizeActual===normalzeExpected;

    }


    const handleRunCode=async()=>{
        setIsRunning(true);
        setOutput(null)
        const result =await codeexecute(selectedLanguage,code);
        setOutput(result)
        setIsRunning(false)

            // check if code executed successfully and matches expected output
        if(result.success){
            const expectedOutput=currentProblem.expectedOutput[selectedLanguage];
            const testsPassed=checkIfTestsPassed(result.output,expectedOutput);

            if(testsPassed){
                triggerConfetti();
                toast.success("All test passed ");
            }
            else{
                toast.error("Test failed ! check your output ")
            }

        }
        else{
            toast.error("Code execution failed!");

        }


    }


  return (

    <div className='h-screen w-screen bg-base-100 flex flex-col'>
        <Navbar/>
        <div className="flex-1">
            <PanelGroup direction="horizontal">
            {/* {left panel  problem description} */}
            <Panel defaultSize={40} minSize={30}>
            <ProblemDescription
            problem={currentProblem}
            currentProblemId={currentProblemId}
            onProblemChange={handleProblemChange}
            allProblems={Object.values(PROBLEMS)}
            
            />
            </Panel>

            <PanelResizeHandle className ="w-2 bg-base-300 hover:bg-primary transition-colors cursor-col-resize"/>


            {/* {Right side panel } */}

            <Panel defaultSize={40} minSize={30}>

            <PanelGroup direction="vertical">
            {/* top panel for code editor */}
            <Panel defaultSize={70} minSize={30}>
                <CodeEditor
                selectedLanguage={selectedLanguage}
                code={code}
                isRunning={isRunning}
                onLanguageChange={handleLanguageChange}
                onCodeChange={setCode}
                onRunCode={handleRunCode}
                
                />
            </Panel>

            <PanelResizeHandle className ="h-2 bg-base-300 hover:bg-primary transition-colors cursor-row-resize"/>
            {/* {output panel} */}
            <Panel defaultSize={70} minSize={30}>
                <OutPutPanel output={output}/>
            </Panel>
            </PanelGroup>

            </Panel>
            </PanelGroup>


        </div>


    </div>
  )
}

export default ProblemPage