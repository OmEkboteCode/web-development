export default function UserStatus({ isLoggedIn }) {
  return (
    <div>
        <h2>
            {isLoggedIn ? "Welcome Back!" : "Please Log In"}
        </h2>

        <h4>
            {isLoggedIn && " View Dashboard"}
        </h4>
    </div>
  )
}

// export default function UserStatus({ isLoggedIn }) {
//   return (
//     <div>

//     </div>
//   );
// }
