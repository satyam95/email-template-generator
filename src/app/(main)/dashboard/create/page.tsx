import AllnputBox from "@/components/AllnputBox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles } from "lucide-react";

function Create() {
  return (
    <div className="px-10 md:px-28 lg:px-44 xl:px-56 mt-20">
      <div>
        <h2 className="font-bold text-3xl">CREATE NEW EMAIL TEMPLATE</h2>
        <p className="text-lg text-gray-400">Effortlessly</p>
      </div>
      <Tabs defaultValue="AI" className="w-[500px] mt-12">
        <TabsList>
          <TabsTrigger value="AI">
            Create with AI <Sparkles className="w-5 h-5 ml-2" />
          </TabsTrigger>
          <TabsTrigger value="SCRATCH">Start from Scratch</TabsTrigger>
        </TabsList>
        <TabsContent value="AI">
          <AllnputBox />
        </TabsContent>
        <TabsContent value="SCRATCH">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}

export default Create;
