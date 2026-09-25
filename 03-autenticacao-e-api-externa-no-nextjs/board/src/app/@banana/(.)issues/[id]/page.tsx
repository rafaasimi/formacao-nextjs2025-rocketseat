import { Drawer } from "@/components/drawer";
import { BackButton } from "./back-button";
import { DrawerTitle } from "@/components/ui/drawer";
import { IssueDetails } from "@/app/issues/[id]/issue-details";

interface IssuePageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function IssueDrawer({ params }: IssuePageProps) {
    const { id } = await params;

    return <Drawer>
        <div className="flex flex-col gap-4 p-6">
            <BackButton />

            <DrawerTitle className="sr-only">Issue details</DrawerTitle>

            <IssueDetails issueId={id} />
        </div>
    </Drawer>;
}
