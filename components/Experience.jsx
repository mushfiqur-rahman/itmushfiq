const Experience = () => {
  return (
    <>
      <div className="py-4">
        <h2 id="work-experience" className="text-xl font-bold">
          Work Experience
        </h2>

        <div
          className="mt-4 space-y-4"
          role="feed"
          aria-labelledby="work-experience"
        >
          {/* Experience Item */}
          <div className="rounded-lg py-2">
            <div className="flex flex-col space-y-1.5">
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <h3 className="font-semibold leading-none">
                  <a
                    href="https://www.upwork.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Upwork
                  </a>
                </h3>

                <span className="text-sm tabular-nums">Jan 2025 – Present</span>
              </div>

              <h4 className="font-mono text-sm font-semibold">
                IT Support Engineer
              </h4>

              <p className="text-sm text-muted-foreground">Remote</p>
            </div>
          </div>

          {/* Experience Item */}
          <div className="rounded-lg py-2">
            <div className="flex flex-col space-y-1.5">
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <h3 className="font-semibold leading-none">
                  Innovative Software
                </h3>

                <span className="text-sm tabular-nums">
                  Jan 2023 – Jan 2025
                </span>
              </div>

              <h4 className="font-mono text-sm font-semibold">
                IT Support Engineer
              </h4>

              <p className="text-sm text-muted-foreground">Remote</p>
            </div>
          </div>

          {/* Experience Item */}
          <div className="rounded-lg py-2">
            <div className="flex flex-col space-y-1.5">
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <h3 className="font-semibold leading-none">
                  <a
                    href="https://www.upwork.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    DoWell Research UK
                  </a>
                </h3>

                <span className="text-sm tabular-nums">
                  Apr 2022 – March 2024
                </span>
              </div>

              <h4 className="font-mono text-sm font-semibold">
                Python Django Developer
              </h4>

              <p className="text-sm text-muted-foreground">Remote</p>
            </div>
          </div>

          {/* Experience Item */}
          <div className="rounded-lg py-2">
            <div className="flex flex-col space-y-1.5">
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <h3 className="font-semibold leading-none">MicrodreamIT</h3>

                <span className="text-sm tabular-nums">
                  Jan 2022 – Dec 2022
                </span>
              </div>

              <h4 className="font-mono text-sm font-semibold">
                Software Engineer Trainee
              </h4>

              <p className="text-sm text-muted-foreground">
                Sheikh Hasina Software &amp; Technology Park, Jashore,
                Bangladesh
              </p>
            </div>
          </div>

          {/* Experience Item */}
          <div className="rounded-lg py-2">
            <div className="flex flex-col space-y-1.5">
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <h3 className="font-semibold leading-none">
                  Aamra Networks Ltd.
                </h3>

                <span className="text-sm tabular-nums">
                  Feb 2020 – Dec 2021
                </span>
              </div>

              <h4 className="font-mono text-sm font-semibold">
                Jr. Infrastructure Engineer
              </h4>

              <p className="text-sm text-muted-foreground">
                Sheikh Hasina Software &amp; Technology Park, Jashore,
                Bangladesh
              </p>
            </div>
          </div>

          {/* Experience Item */}
          <div className="rounded-lg py-2">
            <div className="flex flex-col space-y-1.5">
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <h3 className="font-semibold leading-none">Chaldal</h3>

                <span className="text-sm tabular-nums">
                  Apr 2019 – Feb 2020
                </span>
              </div>

              <h4 className="font-mono text-sm font-semibold">
                Customer Service Executive
              </h4>

              <p className="text-sm text-muted-foreground">
                Sheikh Hasina Software &amp; Technology Park, Jashore,
                Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
