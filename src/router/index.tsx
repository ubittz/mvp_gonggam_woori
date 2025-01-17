import { Navigate, Route, Routes } from 'react-router-dom';

import Error from '@@pages/Error';
import Home from '@@pages/Home';
import Lecture from '@@pages/Lecture';
import LectureFinish from '@@pages/Lecture/LectureFinish';
import LectureIntroPage from '@@pages/Lecture/LectureIntroPage';
import LectureMap from '@@pages/Lecture/LectureMap';
import LecturePage from '@@pages/Lecture/LecturePage';
import Login from '@@pages/Login';
import Register from '@@pages/Login/Register';
import MyPage from '@@pages/MyPage';
import MyPageEdit from '@@pages/MyPage/ProfileEdit';
import MyPagePayment from '@@pages/MyPage/PurchaseHistory';
import Purchase from '@@pages/Purchase';
import PurchaseSuccess from '@@pages/Purchase/Success';
import { PAGES, ROUTE_PREFIX } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={ROUTE_PREFIX} />} />
      <Route path={pathGenerator(PAGES.AUTH)} element={<Login />} />
      <Route path={pathGenerator(PAGES.AUTH) + '/register'} element={<Register />} />

      <Route path={pathGenerator(PAGES.HOME)} element={<Home />} />

      <Route path={pathGenerator(PAGES.LECTURE)} element={<Lecture />} />
      <Route path={pathGenerator(PAGES.LECTURE) + '/map'} element={<LectureMap />} />
      <Route path={pathGenerator(PAGES.LECTURE) + '/:lectureId/intro'} element={<LectureIntroPage />} />
      <Route path={pathGenerator(PAGES.LECTURE) + '/:lectureId/content'} element={<LecturePage />} />
      <Route path={pathGenerator(PAGES.LECTURE) + '/:lectureId/finish'} element={<LectureFinish />} />

      <Route path={pathGenerator(PAGES.MY_PAGE)} element={<MyPage />} />
      <Route path={pathGenerator(PAGES.MY_PAGE) + '/edit'} element={<MyPageEdit />} />
      <Route path={pathGenerator(PAGES.MY_PAGE) + '/payment'} element={<MyPagePayment />} />

      <Route path={pathGenerator(PAGES.PURCHASE)} element={<Purchase />} />
      <Route path={pathGenerator(PAGES.PURCHASE) + '/success'} element={<PurchaseSuccess />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default Router;
