import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, MessageSquare, Heart, Share2, Download } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const articles = [
  {
    id: 1,
    category: "AI",
    title: "OS-Copilot: Towards Generalist Computer Agents with Self-Improvement",
    views: 873,
    comments: 402,
    date: "Feb 12"
  },
  {
    id: 2,
    category: "CL",
    title: "Chain-of-Thought Reasoning Without Prompting",
    views: 1.4,
    comments: 79,
    date: "Feb 15"
  },
  // ... other articles
];

export default function ArticleList() {
  return (
    <ScrollArea className="h-[600px] w-full rounded-md border p-4">
      {articles.map((article) => (
        <Card key={article.id} className="mb-4 last:mb-0">
          <CardHeader>
            <Badge variant="outline">{article.category}</Badge>
            <CardTitle className="text-lg font-semibold">{article.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm">
              <Eye className="inline-block w-4 h-4 mr-1" /> {article.views}k views
              <MessageSquare className="inline-block w-4 h-4 mx-2" /> {article.comments} comments
            </CardDescription>
          </CardContent>
          <CardFooter>
            <div className="flex items-center justify-between text-sm">
              <span>{article.date}</span>
              <div className="flex items-center">
                <Heart className="w-4 h-4 mr-2 cursor-pointer" />
                <Share2 className="w-4 h-4 mr-2 cursor-pointer" />
                <Download className="w-4 h-4 cursor-pointer" />
              </div>
            </div>
          </CardFooter>
          {article.id !== articles.length && <Separator />}
        </Card>
      ))}
    </ScrollArea>
  );
}