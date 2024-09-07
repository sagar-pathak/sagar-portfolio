"use client"
import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'

const DownloadCV = () => {
    const downloadCV = () => {
        // anchor link
        const element = document.createElement("a");
        element.href = "/assets/resume/sagar-pathak-resume.pdf";
        element.target = "_blank";
        element.download = "sagar-pathak-resume.pdf";
        // simulate link click
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }
    return (
        <Button onClick={downloadCV} variant="outline" size="lg" className="uppercase flex items-center gap-2">
            <span>Download CV</span>
            <FiDownload className="text-xl"></FiDownload>
        </Button>
    )
}

export default DownloadCV
