import Link from "next/link";

const Navigation = () => {
  return (
    <>
      {/*Side Navigation*/}
      <nav className="hidden lg:w-3/12 md:w-12/12 md:hidden lg:block sm:hidden bg-none shadow-l">
        <div className="text-2xl text-center p{t|b}-{6} text-slate-800 font-semibold text-gray-500 pb-8 tracking-wide">
          <a href="/"> ATTHACHAI P </a>
        </div>
        <ul className="text-center text-gray-500 text-sm font-light transition ease-in-out max-w-40">
          <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
            <a href="sapa">SAPATV</a>
          </li>
          <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
            <a href="pdflive">PDF LIVE</a>
          </li>
          <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
            <a href="splashed">Splashed</a>
          </li>
          <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
            <a href="gikipedia">Gikipedia</a>
          </li>
          <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
            <a href="clarie">Clarie</a>
          </li>
          <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
            <a href="openrice">OpenRice</a>
          </li>
          <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
            <a href="88db">88db</a>
          </li>
          <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
            <a href="kitchentech">Kitchen Tech</a>
          </li>
          <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
            <a href="eis">eis</a>
          </li>
          <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
            <a href="2monkeysfilms">2MonkeysFilms</a>
          </li>
          <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
            <a href="leatherocasa">LeatherO Casa</a>
          </li>
          <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
            <a href="matthewsfamilyfarms">Matthews Family Farms...</a>
          </li>
          <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
            <a href="infinitybusinessdev">Infinity Business Devel...</a>
          </li>
          <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
            <a href="babadook">Babadook</a>
          </li>
          <li className="hover:text-gray-900 duration-300 pb-3 cursor-pointer">
            <a href="movingcard">Moving Card</a>
          </li>
        </ul>
        <div className="flex justify-center pt-6">
          <a target="_blank" href="https://www.linkedin.com/in/bo-phan/">
            {" "}
            <img src="/src/img/icon.svg" alt="Linkedin"></img>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
