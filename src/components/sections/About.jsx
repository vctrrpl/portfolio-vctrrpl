import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { technologies, workExperience, education } from '@/library/library';

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4 flex items-center flex-col w-full sm:w-full md:w-full">
        <div className="rounded-xl p-8 border-white/20 border hover:-translate-y-1 transition-all w-full">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
            My Technologies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="flex items-center gap-3">
                <tech.icon className="text-2xl text-gray" />
                <p className="text-gray-300">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        <Tabs defaultValue="work" className="w-full mt-20">
          <TabsList className="grid w-full grid-cols-2 bg-zinc-800 rounded-lg h-10 p-1 gap-1">
            <TabsTrigger
              value="work"
              className="text-base font-normal text-gray-400 data-[state=active]:bg-black data-[state=active]:text-white rounded-lg cursor-pointer"
            >
              Work
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="text-base font-normal text-gray-400 data-[state=active]:bg-black data-[state=active]:text-white rounded-lg cursor-pointer"
            >
              Education
            </TabsTrigger>
          </TabsList>

          {[
            { value: 'work', data: workExperience },
            { value: 'education', data: education },
          ].map(({ value, data }) => (
            <TabsContent
              key={value}
              value={value}
              className="rounded-xl p-8 border-white/20 border hover:-translate-y-1 transition-all"
            >
              <Card className="border-none">
                <CardContent className="space-y-4 h-auto md:h-96">
                  {data.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div>
                        <p className="text-orange-500 text-lg font-bold">
                          {item.title}
                        </p>
                        <p className=" text-gray-400  font-semibold">
                          {item.company || item.institution}
                        </p>
                        <p className="text-sm text-gray-300 py-0.5">
                          {item.duration}
                        </p>
                        <div
                          className="text-gray-400 py-0.5 custom-list"
                          dangerouslySetInnerHTML={{
                            __html: item.description,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
