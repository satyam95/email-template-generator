"use client";
import React, { useState } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import Prompt from "@/data/Prompt";
import axios from "axios";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { v4 as uuidv4 } from "uuid";
import { useUserDetail } from "@/context/UserDetailContext";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const AllnputBox = () => {
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const SaveTemplate = useMutation(api.emailTemplate.SaveTemplate);
  const { userDetail, setUserDetail } = useUserDetail();
  const router = useRouter();

  const OnGenerate = async () => {
    const PROMPT = Prompt.EMAIL_PROMPT + "\n-" + userInput;
    const tid = uuidv4();

    setLoading(true);
    try {
      const result = await axios.post("/api/ai-email-generate", {
        prompt: PROMPT,
        userEmail: "",
        tId: 0,
      });
      console.log(result.data);
      const resp = await SaveTemplate({
        tid: tid,
        design: result.data,
        email: userDetail?.email,
        description: userInput,
      });
      console.log(resp);
      router.push("/editor/" + tid);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <div className="mt-5">
      <p className="mb-2">
        Provide details about the email template you'd like to create
      </p>
      <Textarea
        placeholder="Start writing here..."
        rows={5}
        className=""
        onChange={(e) => setUserInput(e.target.value)}
      />
      <Button
        className="w-full mt-7"
        onClick={OnGenerate}
        disabled={userInput?.length == 0 || loading}
      >
        {loading ? (
          <span className="flex gap-2">
            <Loader2 className="animate-spin" /> Please wait...
          </span>
        ) : (
          "Generate"
        )}
      </Button>
    </div>
  );
};

export default AllnputBox;
