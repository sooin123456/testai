import { Link, MetaFunction } from "react-router";
import { ProductCard } from "~/features/products/components/product-card";
import { Button } from "../components/ui/button";
import { PostCard } from "~/features/community/components/post-card";
import { IdeaCard } from "~/features/ideas/components/idea-card";
import { JobCard } from "~/features/jobs/components/job-card";
import { TeamCard } from "~/features/teams/components/team-card";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { 
  Users, 
  FileText, 
  TrendingUp, 
  MessageCircle, 
  Upload,
  Download,
  Star
} from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | LukasAI" },
    { name: "description", content: "Welcome to LukasAI" },
  ];
};

export default function HomePage() {
  // 임시 통계 데이터
  const stats = [
    { icon: Users, label: "활성 팀", value: "1,234", change: "+12%" },
    { icon: FileText, label: "공유 파일", value: "5,678", change: "+8%" },
    { icon: TrendingUp, label: "총 다운로드", value: "23,456", change: "+15%" },
    { icon: Star, label: "인기 파일", value: "345", change: "+5%" },
  ];

  // 임시 실시간 활동 데이터
  const activities = [
    { user: "Lynn", action: "project-design.pdf 업로드", time: "2분 전", avatar: "https://github.com/inthetiger.png" },
    { user: "John", action: "backend-api.md 다운로드", time: "5분 전", avatar: "https://github.com/apple.png" },
    { user: "Sarah", action: "새 팀에 참여", time: "8분 전", avatar: "https://github.com/serranoarevalo.png" },
    { user: "Mike", action: "database-schema.sql 업로드", time: "12분 전", avatar: "https://github.com/facebook.png" },
  ];

  return (
    <div className="space-y-32">
      {/* Hero 섹션 */}
      <div className="text-center space-y-8 py-20">
        <div className="space-y-6">
          <h1 className="text-6xl font-bold leading-tight tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            팀과 함께 만드는 혁신
          </h1>
          <p className="text-2xl font-light text-muted-foreground max-w-3xl mx-auto">
            파일 공유로 협업하고, 인기 파일로 영감을 얻으세요.
            <br />
            팀원들과 함께 더 나은 제품을 만들어보세요.
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/teams/create">팀 만들기</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/teams/popular-files">인기 파일 보기</Link>
          </Button>
        </div>
      </div>

      {/* 통계 대시보드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardHeader className="pb-2">
              <div className="flex justify-center mb-2">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold">{stat.value}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <Badge variant="secondary" className="text-xs">
                {stat.change}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 실시간 활동 피드 */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <h2 className="text-2xl font-bold">실시간 활동</h2>
        </div>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={activity.avatar} />
                    <AvatarFallback>{activity.user[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <span className="font-medium">{activity.user}</span>
                    <span className="text-muted-foreground">님이 {activity.action}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Products - 개선된 버전 */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight">
              Today's Products
            </h2>
            <p className="text-xl font-light text-muted-foreground">
              The best products made by our community today.
            </p>
          </div>
          <Button variant="link" asChild className="text-lg">
            <Link to="/products/leaderboards">Explore all products &rarr;</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <ProductCard
              key={`productId-${index}`}
              id={`productId-${index}`}
              name="Product Name"
              description="Product Description"
              commentsCount={12}
              viewsCount={12}
              votesCount={120}
            />
          ))}
        </div>
      </div>

      {/* Latest Discussions - 개선된 버전 */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight">
              Latest Discussions
            </h2>
            <p className="text-xl font-light text-muted-foreground">
              The latest discussions from our community.
            </p>
          </div>
          <Button variant="link" asChild className="text-lg">
            <Link to="/community">Explore all discussions &rarr;</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <PostCard
              key={`postId-${index}`}
              id={`postId-${index}`}
              title="What is the best productivity tool?"
              author="Nico"
              authorAvatarUrl="https://github.com/apple.png"
              category="Productivity"
              postedAt="12 hours ago"
            />
          ))}
        </div>
      </div>

      {/* IdeasGPT - 개선된 버전 */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight">
              IdeasGPT
            </h2>
            <p className="text-xl font-light text-muted-foreground">
              Find ideas for your next project.
            </p>
          </div>
          <Button variant="link" asChild className="text-lg">
            <Link to="/ideas">Explore all ideas &rarr;</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <IdeaCard
              key={`ideaId-${index}`}
              id={`ideaId-${index}`}
              title="A startup that creates an AI-powered generated personal trainer, delivering customized fitness recommendations and tracking of progress using a mobile app to track workouts and progress as well as a website to manage the business."
              viewsCount={123}
              postedAt="12 hours ago"
              likesCount={12}
              claimed={index % 2 === 0}
            />
          ))}
        </div>
      </div>

      {/* Latest Jobs - 개선된 버전 */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight">
              Latest Jobs
            </h2>
            <p className="text-xl font-light text-muted-foreground">
              Find your dream job.
            </p>
          </div>
          <Button variant="link" asChild className="text-lg">
            <Link to="/jobs">Explore all jobs &rarr;</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <JobCard
              key={`jobId-${index}`}
              id={`jobId-${index}`}
              company="Tesla"
              companyLogoUrl="https://github.com/facebook.png"
              companyHq="San Francisco, CA"
              title="Software Engineer"
              postedAt="12 hours ago"
              type="Full-time"
              positionLocation="Remote"
              salary="$100,000 - $120,000"
            />
          ))}
        </div>
      </div>

      {/* Find a team mate - 개선된 버전 */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight">
              Find a team mate
            </h2>
            <p className="text-xl font-light text-muted-foreground">
              Join a team looking for a new member.
            </p>
          </div>
          <Button variant="link" asChild className="text-lg">
            <Link to="/teams">Explore all teams &rarr;</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <TeamCard
              key={`teamId-${index}`}
              id={`teamId-${index}`}
              leaderUsername="lynn"
              leaderAvatarUrl="https://github.com/inthetiger.png"
              positions={[
                "React Developer",
                "Backend Developer",
                "Product Manager",
              ]}
              projectDescription="a new social media platform"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
