import { ref } from "vue";

export function Theme() {
  const theme = ref("dark"); // Set the default theme to "dark"

  const userTheme = localStorage.getItem("theme");

  const themeCheck = () => {
    if (userTheme === "dark" || !userTheme) {
      document.documentElement.classList.add("dark");
      theme.value = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      theme.value = "light";
    }
  };

  const themeSwitch = () => {
    if (theme.value === "dark") {
      theme.value = "light";
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      theme.value = "dark";
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  return [theme, themeCheck, themeSwitch];
}
