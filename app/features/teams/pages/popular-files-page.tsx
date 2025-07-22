import { Card, CardContent, CardHeader, CardTitle } from "~/common/components/ui/card";
import { Badge } from "~/common/components/ui/badge";
import { Button } from "~/common/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/common/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/common/components/ui/select";
import { Download, Eye, FileText, Calendar, Users } from "lucide-react";

export const meta = () => [
  { title: "인기 파일 랭킹 | LukasAI" },
];

export default function PopularFilesPage() {
  // 임시 데이터
  const popularFiles = [
    {
      id: 1,
      filename: "project-design-system.pdf",
      description: "디자인 시스템 가이드라인",
      team: "Design Team",
      uploader: "Sarah Kim",
      downloads: 234,
      views: 1567,
      fileSize: "2.3 MB",
      uploadedAt: "2024-01-15",
      fileType: "pdf"
    },
    {
      id: 2,
      filename: "backend-api-documentation.md",
      description: "백엔드 API 문서",
      team: "Backend Team",
      uploader: "John Doe",
      downloads: 189,
      views: 892,
      fileSize: "1.8 MB",
      uploadedAt: "2024-01-14",
      fileType: "md"
    },
    {
      id: 3,
      filename: "frontend-components-library.zip",
      description: "프론트엔드 컴포넌트 라이브러리",
      team: "Frontend Team",
      uploader: "Mike Chen",
      downloads: 156,
      views: 743,
      fileSize: "5.2 MB",
      uploadedAt: "2024-01-13",
      fileType: "zip"
    },
    {
      id: 4,
      filename: "database-schema.sql",
      description: "데이터베이스 스키마 설계",
      team: "Database Team",
      uploader: "Alex Johnson",
      downloads: 142,
      views: 678,
      fileSize: "0.8 MB",
      uploadedAt: "2024-01-12",
      fileType: "sql"
    },
    {
      id: 5,
      filename: "user-research-report.pdf",
      description: "사용자 리서치 보고서",
      team: "UX Team",
      uploader: "Emma Wilson",
      downloads: 98,
      views: 445,
      fileSize: "3.1 MB",
      uploadedAt: "2024-01-11",
      fileType: "pdf"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">인기 파일 랭킹</h1>
        <p className="text-xl text-muted-foreground">
          가장 많이 사용되는 파일들을 확인해보세요
        </p>
      </div>

      <div className="flex justify-between items-center">
        <Tabs value="daily" onValueChange={() => {}} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="daily">일간</TabsTrigger>
            <TabsTrigger value="weekly">주간</TabsTrigger>
            <TabsTrigger value="monthly">월간</TabsTrigger>
            <TabsTrigger value="all-time">전체</TabsTrigger>
          </TabsList>

          <div className="flex justify-end mt-4">
            <Select defaultValue="downloads">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="정렬 기준" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="downloads">다운로드 순</SelectItem>
                <SelectItem value="views">조회수 순</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <TabsContent value="daily" className="space-y-4">
            <div className="grid gap-4">
              {popularFiles.map((file, index) => (
                <Card key={file.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <Badge variant="secondary" className="text-xs">
                            #{index + 1}
                          </Badge>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <h3 className="font-semibold text-lg truncate">
                              {file.filename}
                            </h3>
                          </div>
                          <p className="text-muted-foreground mb-3">
                            {file.description}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4" />
                              <span>{file.team}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{file.uploadedAt}</span>
                            </div>
                            <span>{file.fileSize}</span>
                          </div>
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
                          <Button size="sm" variant="outline">
                            미리보기
                          </Button>
                          <Button size="sm">
                            다운로드
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="weekly" className="space-y-4">
            <div className="text-center py-8 text-muted-foreground">
              주간 랭킹 데이터가 여기에 표시됩니다.
            </div>
          </TabsContent>

          <TabsContent value="monthly" className="space-y-4">
            <div className="text-center py-8 text-muted-foreground">
              월간 랭킹 데이터가 여기에 표시됩니다.
            </div>
          </TabsContent>

          <TabsContent value="all-time" className="space-y-4">
            <div className="text-center py-8 text-muted-foreground">
              전체 기간 랭킹 데이터가 여기에 표시됩니다.
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 