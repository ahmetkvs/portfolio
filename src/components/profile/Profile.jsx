import React from "react";
import { portfolioContent } from "../../data/portfolioContent";
import useLightDarkTheme from "../../hooks/useLightDarkTheme";
import useLangTheme from "../../hooks/useLangTheme";

function Profile() {
  const { ldTheme } = useLightDarkTheme();
  const { langTheme } = useLangTheme();

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <h2
        className={`text-4xl font-semibold mb-8 ${ldTheme === "dark" ? "text-white" : "text-black"}`}
      >
        {langTheme === "en"
          ? portfolioContent.profile.left.heading.en
          : portfolioContent.profile.left.heading.tr}
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h2
            className={`text-2xl mb-6 ${ldTheme === "dark" ? "text-violet-400" : "text-violet-600"}`}
          >
            {langTheme === "en"
              ? portfolioContent.profile.left.heading.en
              : portfolioContent.profile.left.heading.tr}
          </h2>
          <div className="flex flex-col gap-7">
            <div className="flex">
              <dt
                className={`font-semibold w-32 ${ldTheme === "dark" ? "text-white" : "text-black"}`}
              >
                {langTheme === "en"
                  ? portfolioContent.profile.left.bdk.en
                  : portfolioContent.profile.left.bdk.tr}
              </dt>
              <dd
                className={`${ldTheme === "dark" ? "text-white" : "text-gray-600"}`}
              >
                {langTheme === "en"
                  ? portfolioContent.profile.left.bdv.en
                  : portfolioContent.profile.left.bdv.tr}
              </dd>
            </div>
            <div className="flex">
              <dt
                className={`font-semibold w-32 ${ldTheme === "dark" ? "text-white" : "text-black"}`}
              >
                {langTheme === "en"
                  ? portfolioContent.profile.left.lok.en
                  : portfolioContent.profile.left.lok.tr}
              </dt>
              <dd
                className={`${ldTheme === "dark" ? "text-white" : "text-gray-600"}`}
              >
                {langTheme === "en"
                  ? portfolioContent.profile.left.lov.en
                  : portfolioContent.profile.left.lov.tr}
              </dd>
            </div>
            <div className="flex">
              <dt
                className={`font-semibold w-32 ${ldTheme === "dark" ? "text-white" : "text-black"}`}
              >
                {langTheme === "en"
                  ? portfolioContent.profile.left.edk.en
                  : portfolioContent.profile.left.edk.tr}
              </dt>
              <dd
                className={`${ldTheme === "dark" ? "text-white" : "text-gray-600"}`}
              >
                {langTheme === "en"
                  ? portfolioContent.profile.left.edv.en1
                  : portfolioContent.profile.left.edv.tr1}{" "}
                <br />{" "}
                {langTheme === "en"
                  ? portfolioContent.profile.left.edv.en2
                  : portfolioContent.profile.left.edv.tr2}
              </dd>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <h2
            className={`text-2xl mb-6 ${ldTheme === "dark" ? "text-violet-400" : "text-violet-600"}`}
          >
            {langTheme === "en"
              ? portfolioContent.profile.right.heading.en
              : portfolioContent.profile.right.heading.tr}
          </h2>
          <p
            className={`${ldTheme === "dark" ? "text-white" : "text-gray-600"}`}
          >
            {langTheme === "en"
              ? portfolioContent.profile.right.text.en
              : portfolioContent.profile.right.text.tr}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
