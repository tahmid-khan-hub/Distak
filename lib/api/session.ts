import UseAxiosSecure from "@/app/hooks/UseAxiosSecure";

export async function fetchSession() {
    
  const axiosSecure = UseAxiosSecure();

  try {
    const res = await axiosSecure.get("/api/session");
    return res.data;
  } catch (error) {
    return null; // not authenticated
  }
}
