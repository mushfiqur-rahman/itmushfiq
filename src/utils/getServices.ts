// src/utils/getServices.ts

export async function getDynamicServices() {
  let dynamicServices: { name: string; path: string }[] = [];

  try {
    // Astro-এর import.meta.glob ব্যবহার করে ফাইল ফেচ করা
    const serviceFiles = import.meta.glob(
      "../pages/services/*.{astro,md,mdx}",
      { eager: true },
    );

    dynamicServices = Object.keys(serviceFiles)
      .map((filePath) => {
        const file: any = serviceFiles[filePath];

        // ফাইল প্যাথ থেকে URL তৈরি করা
        // '../pages/services/email-migration.astro' -> '/services/email-migration'
        const path = filePath
          .replace("../pages", "")
          .replace(/\.(astro|md|mdx)$/, "")
          .replace(/\/index$/, ""); // index.astro হ্যান্ডেল করা

        // টাইটেল বের করা
        let title = file.frontmatter?.title;
        if (!title && path) {
          const slug = path.split("/").pop();
          title = slug
            ?.replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());
        }

        return { name: title || "Service", path };
      })
      .filter((s) => s.path && s.path !== "/services");
  } catch (e) {
    console.warn("No service pages found in src/pages/services/");
  }

  return dynamicServices;
}
