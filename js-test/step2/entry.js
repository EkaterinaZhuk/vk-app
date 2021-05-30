import Model from "./modal.js";
import View from "./view.js";
import Router from "./router.js";

(async () => {
  try {
    const header = document.querySelector("#header");
    await Model.login(7858010, 2 | 8192);
    const [me] = await Model.getUser({ name_case: "gen" });

    header.innerHTML = View.render("header", me);
    Router.init();
  } catch (e) {
    console.error(e);
    alert("Ошибка: " + e.message);
  }
})();
