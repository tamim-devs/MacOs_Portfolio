import WindowControls from '#components/WindowControls';
import WindowWrapper from '#hoc/WindowWrapper';
import { Download } from 'lucide-react';
import ResumePDF from './ResumePDF';

const Resume = () => {
  return (
    <div className="flex flex-col items-center">

      {/* HEADER */}
      <div
        id="window-header"
        className="w-[398px] bg-white border-0 flex items-center justify-between px-3  rounded-t-lg"
      >
        <WindowControls target="resume" />

        <a href="files/resume.pdf" download>
          <Download className='w-8' />
        </a>
      </div>

      {/* CONTENT */}
      <div className="w-[398px] mt-10 bg-white p-0 rounded-b-lg overflow-hidden">
        <ResumePDF />
      </div>

    </div>
  );
};

export default WindowWrapper(Resume, 'resume');
