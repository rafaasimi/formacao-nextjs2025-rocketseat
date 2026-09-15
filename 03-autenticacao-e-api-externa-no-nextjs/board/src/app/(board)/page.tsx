import { ArchiveIcon, MessageCircleIcon, ThumbsUpIcon } from "lucide-react";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { Button } from "@/components/button";
import { Metadata } from "next";
import { listIssues } from "@/http/list-issues";

export const metadata: Metadata = {
  title: "Board"
};

interface BoardProps {
  searchParams: Promise<{
    q?: string;
  }>;
}

export default async function Board({ searchParams }: BoardProps) {
  const { q } = await searchParams;

  const { backlog, todo, in_progress, done } = await listIssues({ search: q });

  return (
    <main className="grid grid-cols-4 gap-5 flex-1 items-stretch">

      <Section.Root>
        <Section.Header>
          <Section.Title>
            <ArchiveIcon className="size-3" />
            Backlog
          </Section.Title>
          <Section.IssueCount>{backlog.length}</Section.IssueCount>
        </Section.Header>

        <Section.Content>
          {backlog.length === 0 ? (
            <div className="flex items-center justify-center py-8 text-center">
              <p className="text-sm text-navy-300">
                No issues matching your filters
              </p>
            </div>
          ) : (
            backlog.map(issue => {
              return (
                <Card.Root key={issue.id}>
                  <Card.Header>
                    <Card.Number>CA01-{issue.issueNumber}</Card.Number>
                    <Card.Title>{issue.title}</Card.Title>
                  </Card.Header>
                  <Card.Footer>
                    <Button>
                      <ThumbsUpIcon className="size-3" />
                      <span className="text-sm">12</span>
                    </Button>

                    <Button>
                      <MessageCircleIcon className="size-3" />
                      <span className="text-sm">{issue.comments}</span>
                    </Button>
                  </Card.Footer>
                </Card.Root>
              );
            })
          )}
        </Section.Content>
      </Section.Root>

      <Section.Root>
        <Section.Header>
          <Section.Title>
            <ArchiveIcon className="size-3" />
            To-do
          </Section.Title>
          <Section.IssueCount>{todo.length}</Section.IssueCount>
        </Section.Header>

        <Section.Content>
          {todo.length === 0 ? (
            <div className="flex items-center justify-center py-8 text-center">
              <p className="text-sm text-navy-300">
                No issues matching your filters
              </p>
            </div>
          ) : (
            todo.map(issue => {
              return (
                <Card.Root key={issue.id}>
                  <Card.Header>
                    <Card.Number>CA01-{issue.issueNumber}</Card.Number>
                    <Card.Title>{issue.title}</Card.Title>
                  </Card.Header>
                  <Card.Footer>
                    <Button>
                      <ThumbsUpIcon className="size-3" />
                      <span className="text-sm">12</span>
                    </Button>

                    <Button>
                      <MessageCircleIcon className="size-3" />
                      <span className="text-sm">{issue.comments}</span>
                    </Button>
                  </Card.Footer>
                </Card.Root>
              );
            })
          )}
        </Section.Content>
      </Section.Root>

      <Section.Root>
        <Section.Header>
          <Section.Title>
            <ArchiveIcon className="size-3" />
            In progress
          </Section.Title>
          <Section.IssueCount>{in_progress.length}</Section.IssueCount>
        </Section.Header>

        <Section.Content>
          {in_progress.length === 0 ? (
            <div className="flex items-center justify-center py-8 text-center">
              <p className="text-sm text-navy-300">
                No issues matching your filters
              </p>
            </div>
          ) : (
            in_progress.map(issue => {
              return (
                <Card.Root key={issue.id}>
                  <Card.Header>
                    <Card.Number>CA01-{issue.issueNumber}</Card.Number>
                    <Card.Title>{issue.title}</Card.Title>
                  </Card.Header>
                  <Card.Footer>
                    <Button>
                      <ThumbsUpIcon className="size-3" />
                      <span className="text-sm">12</span>
                    </Button>

                    <Button>
                      <MessageCircleIcon className="size-3" />
                      <span className="text-sm">{issue.comments}</span>
                    </Button>
                  </Card.Footer>
                </Card.Root>
              );
            })
          )}
        </Section.Content>
      </Section.Root>

      <Section.Root>
        <Section.Header>
          <Section.Title>
            <ArchiveIcon className="size-3" />
            Done
          </Section.Title>
          <Section.IssueCount>{done.length}</Section.IssueCount>
        </Section.Header>

        <Section.Content>
          {done.length === 0 ? (
            <div className="flex items-center justify-center py-8 text-center">
              <p className="text-sm text-navy-300">
                No issues matching your filters
              </p>
            </div>
          ) : (
            done.map(issue => {
              return (
                <Card.Root key={issue.id}>
                  <Card.Header>
                    <Card.Number>CA01-{issue.issueNumber}</Card.Number>
                    <Card.Title>{issue.title}</Card.Title>
                  </Card.Header>
                  <Card.Footer>
                    <Button>
                      <ThumbsUpIcon className="size-3" />
                      <span className="text-sm">12</span>
                    </Button>

                    <Button>
                      <MessageCircleIcon className="size-3" />
                      <span className="text-sm">{issue.comments}</span>
                    </Button>
                  </Card.Footer>
                </Card.Root>
              );
            })
          )}
        </Section.Content>
      </Section.Root>

    </main>
  );
}
