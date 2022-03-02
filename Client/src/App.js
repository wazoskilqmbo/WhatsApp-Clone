import Massenger from "./components/Massenger";

import TemplateProvider from "./themes/TemplateProvider";

import AccountProvider from "./context/AccountProvider";
import UserProvider from "./context/UserProvider";

function App() {
  return (
    <TemplateProvider>
      <UserProvider>
        <AccountProvider>
          <Massenger />
        </AccountProvider>
      </UserProvider>
    </TemplateProvider>
  );
}

export default App;
