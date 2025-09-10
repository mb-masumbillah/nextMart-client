import UserProvider from "@/context/UserContext";
import StoreProvider from "./StoreProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserProvider>
      {children}
      {/* <StoreProvider>{children}</StoreProvider> */}
    </UserProvider>
  );
};

export default Providers;
