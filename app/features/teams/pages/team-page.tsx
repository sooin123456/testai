import { Hero } from "~/common/components/hero";
import { Route } from "./+types/team-page";
import { Button } from "~/common/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Badge } from "~/common/components/ui/badge";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { FileText, Download, Eye } from "lucide-react";

export const meta: Route.MetaFunction = () => [
  { title: "Team Details | LukasAI" },
];

export default function TeamPage() {
  return (
    <div className="space-y-20">
      <Hero title="Join lynn's team" />
      <div className="grid grid-cols-6 gap-40 items-start">
        <div className="col-span-4 grid grid-cols-4 gap-5">
          {[
            {
              title: "Product name",
              value: "Doggie Social",
            },
            {
              title: "Stage",
              value: "MVP",
            },
            {
              title: "Team size",
              value: 3,
            },
            {
              title: "Available equity",
              value: 50,
            },
          ].map((item) => (
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {item.title}
                </CardTitle>
                <CardContent className="p-0 font-bold text-2xl">
                  <p>{item.value}</p>
                </CardContent>
              </CardHeader>
            </Card>
          ))}
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Looking for
              </CardTitle>
              <CardContent className="p-0 font-bold text-2xl">
                <ul className="text-lg list-disc list-inside">
                  {[
                    "React Developer",
                    "Backend Developer",
                    "Product Manager",
                    "UI/UX Designer",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </CardHeader>
          </Card>
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Idea description
              </CardTitle>
              <CardContent className="p-0 font-medium text-xl">
                <p>
                  Doggie Social is a social media platform for dogs. It allows
                  dogs to connect with each other and share their experiences.
                </p>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
        <aside className="col-span-2 space-y-5 border rounded-lg p-6 shadow-sm">
          <div className="flex gap-5">
            <Avatar className="size-14">
              <AvatarFallback>N</AvatarFallback>
              <AvatarImage src="https://github.com/inthetiger.png" />
            </Avatar>
            <div className="flex flex-col">
              <h4 className="text-lg font-medium">Lynn</h4>
              <Badge variant="secondary">Entrepreneur</Badge>
            </div>
          </div>
          <Form className="space-y-5">
            <InputPair
              label="Introduce yourself"
              description="Tell us about yourself"
              name="introduction"
              type="text"
              id="introduction"
              required
              textArea
              placeholder="i.e. I'm a React Developer with 3 years of experience"
            />
            <Button type="submit" className="w-full">
              Get in touch
            </Button>
          </Form>
        </aside>
      </div>

      {/* 팀 파일 공유 섹션 */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight">
              팀 파일 공유
            </h2>
            <p className="text-xl font-light text-muted-foreground">
              팀원들과 파일을 공유하고 협업하세요.
            </p>
          </div>
        </div>

        {/* 파일 업로드 폼 */}
        <Card>
          <CardHeader>
            <CardTitle>새 파일 업로드</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">파일 선택</label>
                <input
                  type="file"
                  className="mt-1 block w-full text-sm text-muted-foreground
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-primary file:text-primary-foreground
                    hover:file:bg-primary/90"
                />
              </div>
              <div>
                <label className="text-sm font-medium">설명</label>
                <input
                  type="text"
                  placeholder="파일에 대한 설명을 입력하세요"
                  className="mt-1 block w-full px-3 py-2 border border-input rounded-md text-sm"
                />
              </div>
            </div>
            <Button className="w-full">파일 업로드</Button>
          </CardContent>
        </Card>

        {/* 업로드된 파일 목록 */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">업로드된 파일</h3>
          <div className="grid gap-4">
            {[
              {
                filename: "project-design-system.pdf",
                description: "디자인 시스템 가이드라인",
                uploader: "Sarah Kim",
                uploadedAt: "2024-01-15",
                downloads: 23,
                views: 156,
                fileSize: "2.3 MB"
              },
              {
                filename: "backend-api-docs.md",
                description: "백엔드 API 문서",
                uploader: "John Doe",
                uploadedAt: "2024-01-14",
                downloads: 18,
                views: 89,
                fileSize: "1.8 MB"
              },
              {
                filename: "frontend-components.zip",
                description: "프론트엔드 컴포넌트 라이브러리",
                uploader: "Mike Chen",
                uploadedAt: "2024-01-13",
                downloads: 15,
                views: 74,
                fileSize: "5.2 MB"
              }
            ].map((file, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <h4 className="font-semibold">{file.filename}</h4>
                      </div>
                      <p className="text-muted-foreground mb-3">{file.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>업로더: {file.uploader}</span>
                        <span>업로드: {file.uploadedAt}</span>
                        <span>크기: {file.fileSize}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                          <Download className="h-4 w-4" />
                          <span>{file.downloads}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{file.views}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">미리보기</Button>
                        <Button size="sm">다운로드</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
