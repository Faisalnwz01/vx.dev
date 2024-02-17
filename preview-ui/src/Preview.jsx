import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import React from 'react';

export default function ArticleSummaryPage() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Card className="max-w-3xl w-full">
        <CardHeader>
          <CardTitle className="text-xl font-bold">DoRA: Weight-Decomposed Low-Rank Adaptation</CardTitle>
          <CardDescription className="text-sm">
            Published Feb 14, 2024 in cs.CL and cs.CV by Shih-Yang Liu, Chien-Yi Wang, Hongxu Yin, Pavlo Molchanov, Yu-Chiang Frank Wang, Kwang-Ting Cheng, and Min-Hung Chen
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={16 / 9}>
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Article Visualization"
              className="rounded-md object-cover"
            />
          </AspectRatio>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Abstract</h2>
            <p className="text-sm mt-2">
              Among the widely used parameter-efficient finetuning (PEFT) methods, LoRA and its variants have gained considerable popularity because of avoiding additional inference costs. However, there still often exists an accuracy gap between these methods and full fine-tuning (FT). In this work, we first introduce a novel weight decomposition analysis to investigate the inherent differences between FT and LoRA. Aiming to resemble the learning capacity of FT from the findings, we propose Weight-Decomposed LowRank Adaptation (DoRA). DoRA decomposes the pre-trained weight into two components, magnitude and direction, for fine-tuning, specifically employing LoRA for directional updates to efficiently minimize the number of trainable parameters. By employing DoRA, we enhance both the learning capacity and training stability of LoRA while avoiding any additional inference overhead. DoRA consistently outperforms LoRA on fine-tuning LLMaA, LLaVA, and VL-BART on various downstream tasks, such as commonsense reasoning, visual instruction tuning, and image/video-text understanding.
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Overview</h2>
            <ul className="list-disc pl-5 text-sm mt-2">
              <li>DoRA, a novel Weight-Decomposed Low-Rank Adaptation method, refines Parameter-Efficient Fine-Tuning (PEFT) by decomposing model weights into magnitude and direction, improving learning efficiency.</li>
              <li>Comparative analysis of DoRA and LoRA demonstrates DoRA's superior performance in learning behavior and task outcomes across various benchmarks without extra inference overhead.</li>
              <li>DoRA significantly enhances PEFT methods, bridging the performance gap between LoRA-based approaches and full fine-tuning in large pre-trained models.</li>
              <li>The research underscores the potential of DoRA for a wider application in optimizing fine-tuning processes, suggesting future exploration across other model architectures and tasks.</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end mt-4">
          <Button variant="outline">Read Full Article</Button>
        </CardFooter>
      </Card>
    </div>
  );
}