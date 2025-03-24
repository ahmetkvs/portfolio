function Profile() {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <h2 className="text-4xl font-semibold mb-8">Profile</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h2 className="text-2xl mb-6 text-violet-600">Profile</h2>
          <div className="flex flex-col gap-7">
            <div className="flex">
              <dt className="font-semibold w-32">Doğum tarihi</dt>
              <dd>22.09.2000</dd>
            </div>
            <div className="flex">
              <dt className="font-semibold w-32">İkamet Şehri</dt>
              <dd>Sakarya</dd>
            </div>
            <div className="flex">
              <dt className="font-semibold w-32">Eğitim Durumu</dt>
              <dd>
                Sakarya Ünv. Bilişim Sis. Müh. <br /> Lisans, 2018
              </dd>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl mb-6 text-violet-600">About Me</h2>
          <p>
            Driven by a methodical approach to learning, I began my journey by
            exploring the intricacies of computer systems, starting with
            networking fundamentals and progressing through a rigorous
            Information Systems Engineering degree at Sakarya University. This
            foundation has shaped my perspective as a developer, emphasizing a
            deep understanding of core concepts. My passion for building tools
            that empower users led me to a full-stack development bootcamp at
            Workintech, where I've honed my skills in React, JS and more. I'm
            excited to apply my knowledge and contribute to impactful projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
