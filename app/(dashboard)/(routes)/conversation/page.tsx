import { Heading } from "@/components/heading";
import { MessageSquare } from "lucide-react";

export const ConversationPage = () => {
  return (
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced chat in Bolivia"
        icon={MessageSquare}
        bgColor="bg-violet-500/10"
        iconColor="text-violet-500"
      />
    </div>
  );
};

export default ConversationPage;
