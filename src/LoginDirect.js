import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import "./NavCss.css";

const supabase = createClient(
  "https://bvczchgshbalfaskstlf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2Y3pjaGdzaGJhbGZhc2tzdGxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzczOTY1NzcsImV4cCI6MTk5Mjk3MjU3N30.l8fzd8VbPe31q453tV-emJ89zxfBJUQDl_HubpaUkaQ"
);

const Login = () => {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event !== "SIGNED_OUT") {
      navigate("/success");
    } else {
      navigate("/");
    }
  });
  return (
    <div className="Authcss1">
      <div className="Authcss">
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: "darkblue",
                  brandAccent: "blue",
                  brandButtonText: "white",
                  defaultButtonBackground: "white",

                  defaultButtonBackgroundHover: "pearl",
                  defaultButtonBorder: "darkblue",
                  defaultButtonText: "darkblue",
                  dividerBackground: "#eaeaea",
                  inputBackground: "transparent",
                  inputBorder: "lightgray",
                  inputText: "black",
                  inputPlaceholder: "darkgray",
                  inputLabelText: "white",
                  inputBorderHover: "darkblue",
                  inputBorderFocus: "darkblue",
                },
                radii: {
                  borderRadiusButton: "6px",
                  buttonBorderRadius: "6px",
                  inputBorderRadius: "6px",
                  anchorTextHoverColor: "darkblue",
                },
                space: {
                  labelBottomMargin: "",
                  inputPadding: "9px",
                  buttonPadding: "8px",
                },
              },
            },
          }}
          providers={["google"]}
        />
      </div>
    </div>
  );
};
export default Login;
