import { Layout } from '../Layout/Layout.jsx'
import { ThemeContext } from '../ThemeContext/ThemeContext.jsx'
import { UserContext } from '../UserContext/UserContext.jsx'
import { MainPage } from '../MainPage/MainPage.jsx'

export const App = ({ title }) => {
  return (
    <ThemeContext>
      <UserContext>
        <Layout>
          <h1>{title}</h1>
          <br />
          <MainPage />
        </Layout>
      </UserContext>
    </ThemeContext>
  )
}
