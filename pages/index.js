import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@nextui-org/react";
import Navbar from "@/components/Navbar";
import { Tabs, Tab } from "@nextui-org/react";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [selected, setSelected] = useState(0);
  return (
    <main className="">
      <Navbar />

      <div className="py-10 px-24">
        <div className="flex items-center">
          <button
            onClick={() => setSelected(0)}
            style={{
              background: selected === 0 ? "black" : "transparent",
              color: selected === 0 ? "white" : "black",
            }}
            className="px-6 py-3 rounded-lg hover:bg-slate-200"
          >
            CRPC
          </button>
          <button
            onClick={() => setSelected(1)}
            style={{
              background: selected === 1 ? "black" : "transparent",
              color: selected === 1 ? "white" : "black",
            }}
            className="px-6 py-3 rounded-lg hover:bg-slate-200 ml-3"
          >
            IPC
          </button>
          <div className="h-12 bg-slate-100 ml-10 w-96 rounded-md px-5">
            <input
              type="text"
              className="bg-transparent h-full"
              placeholder="Search for an act"
              name=""
              id=""
            />
          </div>
        </div>

        {selected == 0 && (
          <div className="mt-10 space-y-3">
            <p>Section 120A. Definition of criminal conspiracy</p>
            <p>Section 120B. Punishment of criminal conspiracy</p>
            <p>
              Section 121. Waging, or attempting to wage war, or abetting waging
              of war, against the Government of India
            </p>
            <p>
              Section 121A. Conspiracy to commit offences punishable by section
              121
            </p>
            <p>
              Section 122. Collecting arms, etc., with intention of waging war
              against the Government of India
            </p>
          </div>
        )}
        {selected == 1 && (
          <div className="mt-10 space-y-3">
            <p>
              Section 154: This section deals with the registration of FIR
              (First Information Report) by the police.
            </p>
            <p>
              Section 161: This section deals with the power of the police to
              examine witnesses during the investigation.
            </p>
            <p>
              Section 164: This section deals with the recording of confessions
              and statements by a Magistrate.
            </p>
            <p>
              Section 167: This section deals with the procedure for obtaining
              police remand for custody of the accused.
            </p>
            <p>
              Section 169: This section deals with the release of the accused
              when evidence is deficient.
            </p>
            <p>
              Section 170: This section deals with the procedure for the
              examination of the accused by the police.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
