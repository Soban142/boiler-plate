import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import { logout } from "../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

const NavbarContainer = styled.nav`
  /* display: flex; */
  background-color: #333;
`;

const Wrapper = styled.div`
  padding: 10px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto; /* Center the Navbar on the page */
`;

const LogoAndSearch = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 20px;
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      font-weight: 400;
      line-height: 1.75;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;

const SearchIconDiv = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 6.4px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  color: black;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 8px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  width: 200px;

  &:focus {
    outline: none;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-right: 15px;
  text-decoration: none;
  color: white;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;

  a {
    color: black;
  }
`;

const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }

  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const Auth = styled.button`
  padding: 5px 10px;
  font-size: 16px;

  border: none;
  background-color: rgba(45, 85, 255, 1);
  color: white;
`;

// Navbar component
const Navbar = () => {
  // const user = useSelector((state) => state.user.currentUser)

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = {
    img: "cool",
  };
  return (
    <NavbarContainer>
      <Wrapper>
        <LogoAndSearch>
          <Logo>MyLogo</Logo>
          <Search>
            <div>
              <SearchInput type="text" placeholder="Search" />
            </div>
            <SearchIconDiv>
              <SearchIcon />
            </SearchIconDiv>
          </Search>
        </LogoAndSearch>
        <NavList>
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Contact</NavItem>
          <NavItem>
            {user ? (
              <User>
                <a>
                  {user && user.img !== "" ? (
                    <img src={user.img} alt="" />
                  ) : (
                    <img
                      src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
                      alt=""
                    />
                  )}
                  <span>
                    Me
                    <div>
                      <ArrowDropDownIcon color="black" />
                    </div>
                  </span>
                </a>
                <SignOut
                  onClick={() => {
                    // signOut(auth)
                    //   .then(() => {})
                    //   .catch((error) => {
                    //     console.log(error);
                    //   });
                    dispatch(logout());
                    navigate("/signin");
                  }}
                >
                  <a>Sign out</a>
                </SignOut>
              </User>
            ) : (
              <Link to="/signin">
                <Auth>Login/Signup</Auth>
              </Link>
            )}
          </NavItem>
        </NavList>
      </Wrapper>
    </NavbarContainer>
  );
};

export default Navbar;
