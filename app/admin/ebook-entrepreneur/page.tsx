import type { Metadata } from "next";
import { Suspense } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import EbookEntrepreneurViewer from "@/components/admin/ebooks/EbookEntrepreneurViewer";
import { getSidebarCounts } from "@/lib/admin/sidebarCounts";

export const metadata: Metadata = { title: "Guide Entrepreneur Sénégal — KEKELI Admin" };
export const dynamic = "force-dynamic";

export default async function EbookEntrepreneurPage() {
  const counts = await getSidebarCounts();

  return (
    <>
      <Suspense fallback={<aside className="w-60 shrink-0 min-h-screen" style={{ background: "#0C0B09" }} />}>
        <AdminSidebar counts={counts} />
      </Suspense>
      <EbookEntrepreneurViewer />
    </>
  );
}
