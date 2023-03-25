import { ref } from "vue";

export function Theme() {
  const theme = ref("");

  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const themeCheck = () => {
    if (userTheme == "dark" || (!userTheme && systemTheme)) {
      document.documentElement.classList.add("dark");
      theme.value = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      theme.value = "light";
    }
  };

  const themeSwitch = () => {
    if (theme.value == "dark") {
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
