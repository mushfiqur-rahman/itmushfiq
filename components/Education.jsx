const Education = () => {
  return (
    <>
      <div className="py-4">
        <h2 id="education" className="text-xl font-bold">
          Education
        </h2>

        <div className="mt-4 space-y-4" role="feed" aria-labelledby="education">
          {/* Education Item */}
          <div className="rounded-lg py-2">
            <div className="flex flex-col space-y-1.5">
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <h3 className="font-semibold leading-none">
                  International English Language Testing System (IELTS)
                </h3>

                <span className="text-sm tabular-nums">
                  Jul 2024 – Oct 2024
                </span>
              </div>

              <h4 className="font-mono text-sm font-semibold">
                British Council
              </h4>
            </div>
          </div>

          {/* Education Item */}
          <div className="rounded-lg py-2">
            <div className="flex flex-col space-y-1.5">
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <h3 className="font-semibold leading-none">
                  B.Sc. (Hons) in Computer Science & Engineering
                </h3>

                <span className="text-sm tabular-nums">
                  Apr 2012 – Oct 2017
                </span>
              </div>

              <h4 className="font-mono text-sm font-semibold">
                ILACS (National University)
              </h4>

              <p className="text-sm text-muted-foreground">
                Khulna, Bangladesh
              </p>
            </div>
          </div>

          {/* Education Item */}
          <div className="rounded-lg py-2">
            <div className="flex flex-col space-y-1.5">
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <h3 className="font-semibold leading-none">
                  Higher Secondary Certificate (Science)
                </h3>

                <span className="text-sm tabular-nums">2008 – 2010</span>
              </div>

              <h4 className="font-mono text-sm font-semibold">
                Keshabpur College
              </h4>

              <p className="text-sm text-muted-foreground">
                Keshabpur, Jashore, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
