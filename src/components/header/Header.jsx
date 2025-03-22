function Header() {
  return (
    <header className="w-full my-20 flex items-center gap-4">
      <div className="header-content w-1/2">
        <p className="styled-name font-semibold">Ahmet Kavas</p>
        <h1 className="text-5xl font-semibold my-5">Learning & Building</h1>
        <p>Merhaba, ismim ahmet, ...</p>
        <div className="header-content-buttons flex gap-2">
          <button className="px-3 py-1 text-violet-600 border-2 border-violet-600 rounded-md hover:bg-violet-900 hover:text-white">
            Hire me
          </button>
          <button className="px-3 py-1 text-violet-600 border-2 border-violet-600 rounded-md hover:bg-violet-900 hover:text-white">
            Github
          </button>
          <button className="px-3 py-1 text-violet-600 border-2 border-violet-600 rounded-md hover:bg-violet-900 hover:text-white">
            Linkedin
          </button>
        </div>
      </div>
      <div className="header-image w-1/2 flex justify-center">
        <img
          className="rounded-xl"
          src="https://picsum.photos/250/200"
          alt=""
        />
      </div>
    </header>
  );
}

export default Header;
