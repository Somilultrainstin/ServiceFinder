(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    106: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(2),
        r = a.n(n),
        i = a(24),
        c = a.n(i),
        s = (a(71), a(72), a(4)),
        l = a(12),
        o = a(6),
        d = a(5),
        j = a.n(d),
        u = a(10),
        b = a(11),
        p = a.n(b),
        x = a(109),
        h = "SET_ALERT",
        O = "REMOVE_ALERT",
        f = "REGISTER_SUCCESS",
        m = "REGISTER_FAIL",
        g = "USER_LOADED",
        v = "AUTH_ERROR",
        y = "LOGIN_SUCCESS",
        N = "LOGIN_FAIL",
        k = "LOGOUT",
        w = "GET_PROFILE",
        S = "GET_PROFILES",
        A = "UPDATE_PROFILE",
        C = "CLEAR_PROFILE",
        E = "PROFILE_ERROR",
        I = "ACCOUNT_DELETED",
        P = "CREATE_REVIEW",
        R = "CREATE_REVIEW_FAIL",
        T = "RESET_REVIEW",
        D = "PROFILE_LOADING",
        W = function (e, t) {
          var a =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 3e3;
          return function (n) {
            var r = Object(x.a)();
            n({ type: h, payload: { msg: e, alertType: t, id: r } }),
              setTimeout(function () {
                return n({ type: O, payload: r });
              }, a);
          };
        },
        F = function (e) {
          e
            ? (p.a.defaults.headers.common["x-auth-token"] = e)
            : delete p.a.defaults.headers.common["x-auth-token"];
        },
        B = function () {
          return (function () {
            var e = Object(u.a)(
              j.a.mark(function e(t) {
                var a;
                return j.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            localStorage.token && F(localStorage.token),
                            (e.prev = 1),
                            (e.next = 4),
                            p.a.get("/api/auth")
                          );
                        case 4:
                          (a = e.sent),
                            t({ type: g, payload: a.data }),
                            (e.next = 11);
                          break;
                        case 8:
                          (e.prev = 8), (e.t0 = e.catch(1)), t({ type: v });
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 8]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        },
        L = a(52),
        z = function () {
          var e = localStorage.getItem("token");
          return !(!e || "" === e) && Object(L.a)(e).user.isAdmin;
        },
        _ = a(1),
        M = Object(o.b)(
          function (e) {
            return { auth: e.auth };
          },
          {
            logout: function () {
              return function (e) {
                window.localStorage.removeItem("token"),
                  e({ type: C }),
                  e({ type: k });
              };
            },
          }
        )(function (e) {
          var t = e.auth,
            a = t.isAuthenticated,
            r = t.loading,
            i = t.user,
            c = e.logout,
            l = z(),
            o = function () {
              if (l)
                return Object(_.jsx)("li", {
                  children: Object(_.jsxs)(s.b, {
                    to: "/admin",
                    children: [
                      Object(_.jsx)("i", { className: "fas fa-user" }),
                      " ",
                      Object(_.jsx)("span", {
                        className: "hide-sm",
                        children: "Admin",
                      }),
                    ],
                  }),
                });
            },
            d = Object(_.jsxs)("ul", {
              children: [
                Object(_.jsx)("li", {
                  children: Object(_.jsxs)(s.b, {
                    to: "/profiles",
                    children: [
                      Object(_.jsx)("i", { className: "fas fa-home" }),
                      " ",
                      Object(_.jsx)("span", {
                        className: "hide-sm",
                        children: "All Services",
                      }),
                    ],
                  }),
                }),
                Object(_.jsx)("li", {
                  children: Object(_.jsxs)(s.b, {
                    to: "/dashboard",
                    children: [
                      Object(_.jsx)("i", { className: "fas fa-user" }),
                      " ",
                      Object(_.jsx)("span", {
                        className: "hide-sm",
                        children: "My Profile",
                      }),
                    ],
                  }),
                }),
                Object(_.jsx)("li", {
                  children: Object(_.jsxs)(s.b, {
                    to: "/",
                    children: [
                      Object(_.jsx)("i", { className: "fas fa-search" }),
                      " ",
                      Object(_.jsx)("span", {
                        className: "hide-sm",
                        children: "Search",
                      }),
                    ],
                  }),
                }),
                Object(_.jsx)("li", {
                  children: Object(_.jsxs)(s.b, {
                    to: "/about",
                    children: [
                      Object(_.jsx)("i", { className: "fa  fa-info-circle" }),
                      " ",
                      Object(_.jsx)("span", {
                        className: "hide-sm",
                        children: "About",
                      }),
                    ],
                  }),
                }),
                Object(_.jsx)("li", {
                  children: Object(_.jsxs)(s.b, {
                    to: "#!",
                    onClick: c,
                    children: [
                      Object(_.jsx)("i", { className: "fas fa-sign-out-alt" }),
                      " ",
                      Object(_.jsx)("span", {
                        className: "hide-sm",
                        children: "Logout",
                      }),
                    ],
                  }),
                }),
                o(),
              ],
            }),
            j = Object(_.jsxs)("ul", {
              children: [
                Object(_.jsx)("li", {
                  children: Object(_.jsxs)(s.b, {
                    to: "/profiles",
                    children: [
                      Object(_.jsx)("i", { className: "fas fa-home" }),
                      " ",
                      Object(_.jsx)("span", {
                        className: "hide-sm",
                        children: "All Services",
                      }),
                    ],
                  }),
                }),
                Object(_.jsx)("li", {
                  children: Object(_.jsxs)(s.b, {
                    to: "/about",
                    children: [
                      Object(_.jsx)("i", { className: "fa  fa-info-circle" }),
                      " ",
                      Object(_.jsx)("span", {
                        className: "hide-sm",
                        children: "About",
                      }),
                    ],
                  }),
                }),
                Object(_.jsx)("li", {
                  children: Object(_.jsxs)(s.b, {
                    to: "/",
                    children: [
                      Object(_.jsx)("i", { className: "fas fa-search" }),
                      " ",
                      Object(_.jsx)("span", {
                        className: "hide-sm",
                        children: "Search",
                      }),
                    ],
                  }),
                }),
                Object(_.jsx)("li", {
                  children: Object(_.jsxs)(s.b, {
                    to: "#!",
                    onClick: c,
                    children: [
                      Object(_.jsx)("i", { className: "fas fa-sign-out-alt" }),
                      " ",
                      Object(_.jsx)("span", {
                        className: "hide-sm",
                        children: "Logout",
                      }),
                    ],
                  }),
                }),
                o(),
              ],
            }),
            u = Object(_.jsxs)("ul", {
              children: [
                Object(_.jsx)("li", {
                  children: Object(_.jsx)(s.b, {
                    to: "/profiles",
                    children: "All Services",
                  }),
                }),
                Object(_.jsx)("li", {
                  children: Object(_.jsx)(s.b, {
                    to: "/about",
                    children: "About",
                  }),
                }),
                Object(_.jsx)("li", {
                  children: Object(_.jsx)(s.b, {
                    to: "/register",
                    children: "Register",
                  }),
                }),
                Object(_.jsx)("li", {
                  children: Object(_.jsx)(s.b, {
                    to: "/login",
                    children: "Login",
                  }),
                }),
              ],
            });
          return Object(_.jsxs)("nav", {
            className: "navbar bg-dark",
            children: [
              Object(_.jsx)("h2", {
                className: "hide-sm",
                children: Object(_.jsx)(s.b, {
                  to: "/",
                  children: "Household ServiceProvider",
                }),
              }),
              !r &&
                Object(_.jsx)(n.Fragment, {
                  children:
                    a && (null === i || void 0 === i ? void 0 : i.isSeller)
                      ? d
                      : Object(_.jsx)(n.Fragment, {
                          children:
                            a &&
                            !(null === i || void 0 === i ? void 0 : i.isSeller)
                              ? j
                              : u,
                        }),
                }),
            ],
          });
        }),
        V = a(7),
        K = a(26),
        G = a(53),
        H = a(29),
        q = a(36),
        U = a(54),
        J = a(55),
        Y = a(56),
        Q = a(57),
        X = a(58),
        Z = {
          Indore: {
            Sarafa: 0,
            "Vijay Nagar": 0,
            "South Tukoganj": 0,
            "Bhawar Kuan": 0,
            "Old Palasia": 0,
            "New Palasia": 0,
          },
          Pune: {
            Wanowrie: 0,
            "Koregaon Park": 0,
            Hadapsar: 0,
            Camp: 0,
            Warje: 0,
            "Pimple Saudagar": 0,
            Kothrud: 0,
            Vishrantwadi: 0,
            "Nanded City": 0,
            Sangvi: 0,
            Bibwewadi: 0,
            Wakad: 0,
            Kondhwa: 0,
            Swargate: 0,
            Nigdi: 0,
            Bavdhan: 0,
            Bhosari: 0,
            "Sinhgad Road": 0,
            Wagholi: 0,
            Narhe: 0,
            Hinjewadi: 0,
            Bopodi: 0,
            PCMC: 0,
            Dhankawadi: 0,
            "Viman Nagar": 0,
            Aundh: 0,
            "Kalyani Nagar": 0,
            Kharadi: 0,
            "Shivaji Nagar": 0,
            "Hinjewadi Phase-3": 0,
            Baner: 0,
            Magarpatta: 0,
          },
          Bangalore: {
            Yeshwanthpur: 0,
            Geddalahalli: 0,
            Basavanagudi: 0,
            Koramangala: 0,
            "JP Nagar": 0,
            Mahadevpura: 0,
            HSR: 0,
            "Kanakapura Road": 0,
            Kadugodi: 0,
            Marathahalli: 0,
            "Rajarajeshwari Nagar": 0,
            "CV Raman Nagar": 0,
            "Electronic City": 0,
            Rajajinagar: 0,
            Kudlu_gate: 0,
            Kadubeesanahalli: 0,
            Shantinagar: 0,
            Jayanagar: 0,
            "Central Bangalore": 0,
            "Wilson Garden": 0,
          },
        },
        $ = {
          "Baby sitting": {
            icon: Object(_.jsx)(G.a, { size: "40" }),
            array: {
              "Baby sitting and Nanny ": 0,
              "Prepare healty meals": 0,
              "light housework": 0,
            },
          },
          Plumbing: {
            icon: Object(_.jsx)(K.c, { size: "40" }),
            array: {
              "Basin & sink": 0,
              Grouting: 0,
              "Drainage pipes": 0,
              Toilet: 0,
              "Water pipe connections": 0,
              "Tab And Mixer": 0,
              "Water Tank": 0,
              Moter: 0,
              "Water Filter": 0,
              "All Services": 0,
            },
          },
          Carpenters: {
            icon: Object(_.jsx)(K.a, { size: "40" }),
            array: {
              Balcony: 0,
              Bed: 0,
              Door: 0,
              "Cupboard & drawer": 0,
              "Water pipe connections": 0,
              "Furniture assembly": 0,
              "Drill & hang": 0,
              "Furniture repair": 0,
              TV: 0,
              "Window & curtain": 0,
              "All Services": 0,
            },
          },
          "Bathroom and Kitchen Cleaning": {
            icon: Object(_.jsx)(K.b, { size: "40" }),
            array: {
              "Bathroom cleaning": 0,
              "Kitchen cleaning": 0,
              "Mini services": 0,
              "All Services": 0,
            },
          },
          "Full Home Cleaning": {
            icon: Object(_.jsx)(K.b, { size: "40" }),
            array: {
              "Apartment Deep Cleaning": 0,
              "Villa Deep Cleaning": 0,
              "Empty Home Deep Cleaning": 0,
              "All Services": 0,
            },
          },
          "Sofa & Carpet Cleaning": {
            icon: Object(_.jsx)(H.c, { size: "40" }),
            array: {
              "Sofa Cleaning": 0,
              "Carpet Cleaning": 0,
              "Mini Services": 0,
              "All Services": 0,
            },
          },
          "Disinfection Services": {
            icon: Object(_.jsx)(q.a, { size: "40" }),
            array: { "All Disinfection Services": 0 },
          },
          "House Keeping": {
            icon: Object(_.jsx)(U.a, { size: "40" }),
            array: {
              "Cleaner or Maid": 0,
              Cook: 0,
              "Live in HouseKeeper": 0,
              "Live out HouseKeeper": 0,
            },
          },
          Tutoring: {
            icon: Object(_.jsx)(J.a, { size: "40" }),
            array: { Tutoring: 0, "exam prep": 0 },
          },
          "Electrical Services": {
            icon: Object(_.jsx)(q.b, { size: "40" }),
            array: {
              "Diwali Lights": 0,
              "Switch & socket": 0,
              Fan: 0,
              Light: 0,
              "MCB & fuse": 0,
              "Inverter & stabilizer": 0,
              Appliance: 0,
              Wiring: 0,
              "All Serice": 0,
            },
          },
          "Moving and delivery": {
            icon: Object(_.jsx)(Y.a, { size: "40" }),
            array: {
              "House Shifting": 0,
              "packing and unpacking": 0,
              Transporting: 0,
            },
          },
          "Salon for Women": {
            icon: Object(_.jsx)(Q.a, { size: "40" }),
            array: {
              "Threading and facewax": 0,
              "Bleach and detan": 0,
              "Cut and Style": 0,
              "Blowdry and styling": 0,
              "spa and massage": 0,
              "Anti frizz and keratin": 0,
              "Maintenance Color": 0,
              "Fashion Color": 0,
            },
          },
          "Salon for Men": {
            icon: Object(_.jsx)(X.a, { size: "40" }),
            array: {
              "Haircut for Men and Kids": 0,
              Haircolor: 0,
              "Shave/Beard Grooming": 0,
              "Detan and facials": 0,
            },
          },
          "Message and Therapies": {
            icon: Object(_.jsx)(H.b, { size: "40" }),
            array: {
              "Head Massage": 0,
              "Neck and Shoulder Massage": 0,
              "Hair strengthening Head Massage": 0,
              "Kids Head Massage": 0,
              "Top to Toe therapy": 0,
              "Pain Relief Therapy": 0,
            },
          },
          "Application Repair and service": {
            icon: Object(_.jsx)(H.a, { size: "40" }),
            array: {
              Repair: 0,
              "installation and uninstallation": 0,
              "Service CheckUp": 0,
            },
          },
        },
        ee = function (e) {
          var t = e.history;
          return Object(_.jsx)("section", {
            className: "landing",
            children: Object(_.jsxs)("div", {
              className: "dark-overlay",
              children: [
                Object(_.jsx)("h1", {
                  className: "large",
                  style: { textAlign: "center", margin: "20px" },
                  children: "Household ServiceProvider",
                }),
                Object(_.jsx)("div", {
                  style: {
                    display: "flex",
                    flexWrap: "wrap",
                    margin: "auto",
                    placeContent: "center",
                  },
                  children: Object.keys($).map(function (e) {
                    return Object(_.jsx)("div", {
                      className: "landingCard",
                      onClick: function () {
                        t.push("/search/".concat(e));
                      },
                      children: Object(_.jsxs)("p", {
                        style: {
                          margin: "0",
                          color: "white",
                          position: "absolute",
                          fontSize: "25px",
                          fontWeight: 700,
                          top: "50%",
                          textAlign: "center",
                          left: "50%",
                          marginRight: "-50%",
                          transform: "translate(-50%, -50%)",
                          display: "flex",
                        },
                        children: [$[e].icon, "\xa0", e, "\xa0"],
                      }),
                    });
                  }),
                }),
              ],
            }),
          });
        },
        te = a(9),
        ae = a(3),
        ne = Object(o.b)(
          function (e) {
            return { auth: e.auth };
          },
          {
            setAlert: W,
            register: function (e) {
              var t = e.name,
                a = e.email,
                n = e.password,
                r = e.isSeller;
              return (function () {
                var e = Object(u.a)(
                  j.a.mark(function e(i) {
                    var c, s, l, o;
                    return j.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (c = {
                                  headers: {
                                    "Content-type": "application/json",
                                  },
                                }),
                                (s = JSON.stringify({
                                  name: t,
                                  email: a,
                                  password: n,
                                  isSeller: r,
                                })),
                                (e.prev = 2),
                                (e.next = 5),
                                p.a.post("/api/users", s, c)
                              );
                            case 5:
                              (l = e.sent),
                                i({ type: f, payload: l.data }),
                                i(B()),
                                (e.next = 15);
                              break;
                            case 10:
                              (e.prev = 10),
                                (e.t0 = e.catch(2)),
                                (o = e.t0.response.data.errors) &&
                                  o.forEach(function (e) {
                                    return i(W(e.msg, "danger"));
                                  }),
                                i({ type: m });
                            case 15:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[2, 10]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })();
            },
          }
        )(function (e) {
          var t = e.setAlert,
            a = e.register,
            r = e.auth,
            i = Object(n.useState)({
              name: "",
              email: "",
              password: "",
              password2: "",
              isSeller: !1,
            }),
            c = Object(V.a)(i, 2),
            o = c[0],
            d = c[1],
            b = o.name,
            p = o.email,
            x = o.password,
            h = o.password2,
            O = o.isSeller,
            f = function (e) {
              d(
                Object(ae.a)(
                  Object(ae.a)({}, o),
                  {},
                  Object(te.a)({}, e.target.name, e.target.value)
                )
              );
            },
            m = (function () {
              var e = Object(u.a)(
                j.a.mark(function e(n) {
                  return j.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          n.preventDefault(),
                            x !== h
                              ? t("Passwords do not match", "danger")
                              : a({
                                  name: b,
                                  email: p,
                                  password: x,
                                  isSeller: O,
                                });
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return r.isAuthenticated
            ? "true" === O
              ? Object(_.jsx)(l.a, { to: "/create-profile" })
              : Object(_.jsx)(l.a, { to: "/profiles" })
            : Object(_.jsxs)(n.Fragment, {
                children: [
                  Object(_.jsx)("h1", {
                    className: "large text-primary",
                    children: "Sign Up",
                  }),
                  Object(_.jsxs)("p", {
                    className: "lead",
                    children: [
                      Object(_.jsx)("i", { className: "fas fa-user" }),
                      " Create Your Account",
                    ],
                  }),
                  Object(_.jsxs)("form", {
                    className: "form",
                    onSubmit: function (e) {
                      return m(e);
                    },
                    children: [
                      Object(_.jsxs)("div", {
                        className: "form-group",
                        children: [
                          Object(_.jsx)("div", {
                            className: "form-text",
                            children: "Name",
                          }),
                          Object(_.jsx)("input", {
                            type: "text",
                            name: "name",
                            value: b,
                            onChange: function (e) {
                              return f(e);
                            },
                            required: !0,
                          }),
                        ],
                      }),
                      Object(_.jsxs)("div", {
                        className: "form-group",
                        children: [
                          Object(_.jsx)("div", {
                            className: "form-text",
                            children: "Email",
                          }),
                          Object(_.jsx)("input", {
                            type: "email",
                            name: "email",
                            value: p,
                            onChange: function (e) {
                              return f(e);
                            },
                            required: !0,
                          }),
                          Object(_.jsx)("small", { className: "form-text" }),
                        ],
                      }),
                      Object(_.jsxs)("div", {
                        className: "form-group",
                        children: [
                          Object(_.jsx)("div", {
                            className: "form-text",
                            children: "Password",
                          }),
                          Object(_.jsx)("input", {
                            type: "password",
                            name: "password",
                            value: x,
                            onChange: function (e) {
                              return f(e);
                            },
                            required: !0,
                            minLength: "6",
                          }),
                        ],
                      }),
                      Object(_.jsxs)("div", {
                        className: "form-group",
                        children: [
                          Object(_.jsx)("div", {
                            className: "form-text",
                            children: "Confirm Password",
                          }),
                          Object(_.jsx)("input", {
                            type: "password",
                            name: "password2",
                            value: h,
                            onChange: function (e) {
                              return f(e);
                            },
                            required: !0,
                            minLength: "6",
                          }),
                        ],
                      }),
                      Object(_.jsxs)("div", {
                        className: "form-group form-text",
                        children: [
                          Object(_.jsx)("input", {
                            type: "radio",
                            name: "isSeller",
                            value: "true",
                            onChange: function (e) {
                              return f(e);
                            },
                          }),
                          Object(_.jsx)("label", {
                            for: "true",
                            children: " I want to sell my Services",
                          }),
                        ],
                      }),
                      Object(_.jsxs)("div", {
                        className: "form-group form-text",
                        children: [
                          Object(_.jsx)("input", {
                            type: "radio",
                            name: "isSeller",
                            value: "false",
                            onChange: function (e) {
                              return f(e);
                            },
                          }),
                          Object(_.jsx)("label", {
                            for: "false",
                            children: " I want to buy Services",
                          }),
                        ],
                      }),
                      Object(_.jsx)("input", {
                        type: "submit",
                        className: "btn btn-primary",
                        value: "Register",
                      }),
                    ],
                  }),
                  Object(_.jsxs)("p", {
                    className: "my-2",
                    children: [
                      "Already have an account? ",
                      Object(_.jsx)(s.b, { to: "/login", children: "Sign In" }),
                    ],
                  }),
                ],
              });
        }),
        re = Object(o.b)(
          function (e) {
            return { auth: e.auth };
          },
          {
            login: function (e, t) {
              return (function () {
                var a = Object(u.a)(
                  j.a.mark(function a(n) {
                    var r, i, c, s;
                    return j.a.wrap(
                      function (a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              return (
                                (r = {
                                  headers: {
                                    "Content-type": "application/json",
                                  },
                                }),
                                (i = JSON.stringify({ email: e, password: t })),
                                (a.prev = 2),
                                (a.next = 5),
                                p.a.post("/api/auth", i, r)
                              );
                            case 5:
                              (c = a.sent),
                                n({ type: y, payload: c.data }),
                                n(B()),
                                (a.next = 15);
                              break;
                            case 10:
                              (a.prev = 10),
                                (a.t0 = a.catch(2)),
                                (s = a.t0.response.data.errors) &&
                                  s.forEach(function (e) {
                                    return n(W(e.msg, "danger"));
                                  }),
                                n({ type: N });
                            case 15:
                            case "end":
                              return a.stop();
                          }
                      },
                      a,
                      null,
                      [[2, 10]]
                    );
                  })
                );
                return function (e) {
                  return a.apply(this, arguments);
                };
              })();
            },
          }
        )(function (e) {
          var t = e.login,
            a = e.auth,
            r = z(),
            i = Object(n.useState)({ email: "", password: "" }),
            c = Object(V.a)(i, 2),
            o = c[0],
            d = c[1],
            b = o.email,
            p = o.password,
            x = function (e) {
              return d(
                Object(ae.a)(
                  Object(ae.a)({}, o),
                  {},
                  Object(te.a)({}, e.target.name, e.target.value)
                )
              );
            },
            h = (function () {
              var e = Object(u.a)(
                j.a.mark(function e(a) {
                  return j.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          a.preventDefault(), t(b, p);
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return r
            ? Object(_.jsx)(l.a, { to: "/admin" })
            : a.isAuthenticated
            ? Object(_.jsx)(l.a, { to: "/profiles" })
            : Object(_.jsxs)(n.Fragment, {
                children: [
                  Object(_.jsx)("h1", {
                    className: "large text-primary",
                    children: "Sign In",
                  }),
                  Object(_.jsxs)("p", {
                    className: "lead",
                    children: [
                      Object(_.jsx)("i", { className: "fas fa-user" }),
                      " Sign Into Your Account",
                    ],
                  }),
                  Object(_.jsxs)("form", {
                    className: "form",
                    onSubmit: function (e) {
                      return h(e);
                    },
                    children: [
                      Object(_.jsxs)("div", {
                        className: "form-group",
                        children: [
                          Object(_.jsx)("div", {
                            className: "form-text",
                            children: "Email Address",
                          }),
                          Object(_.jsx)("input", {
                            type: "email",
                            name: "email",
                            value: b,
                            onChange: function (e) {
                              return x(e);
                            },
                            required: !0,
                          }),
                        ],
                      }),
                      Object(_.jsxs)("div", {
                        className: "form-group",
                        children: [
                          Object(_.jsx)("div", {
                            className: "form-text",
                            children: "Password",
                          }),
                          Object(_.jsx)("input", {
                            type: "password",
                            name: "password",
                            value: p,
                            onChange: function (e) {
                              return x(e);
                            },
                            minLength: "6",
                          }),
                        ],
                      }),
                      Object(_.jsx)("input", {
                        type: "submit",
                        className: "btn btn-primary",
                        value: "Login",
                      }),
                    ],
                  }),
                  Object(_.jsxs)("p", {
                    className: "my-1",
                    children: [
                      "Don't have an account? ",
                      Object(_.jsx)(s.b, {
                        to: "/register",
                        children: "Sign Up",
                      }),
                    ],
                  }),
                ],
              });
        }),
        ie = Object(o.b)(function (e) {
          return { alerts: e.alert };
        })(function (e) {
          var t = e.alerts;
          return (
            null !== t &&
            t.length > 0 &&
            t.map(function (e) {
              return Object(_.jsx)("div", {
                className: "alert-container alert-container-".concat(
                  e.alertType
                ),
                children: Object(_.jsxs)(
                  "div",
                  {
                    className: "alert alert-".concat(e.alertType),
                    children: [
                      Object(_.jsx)("p", {
                        class: "alert-icon",
                        children:
                          "danger" === e.alertType
                            ? Object(_.jsx)("i", {
                                class: "fas fa-exclamation-circle fa-2x",
                              })
                            : Object(_.jsx)("i", {
                                class: "fas fa-check fa-2x",
                              }),
                      }),
                      Object(_.jsx)("p", {
                        className: "alert-msg",
                        children: e.msg,
                      }),
                    ],
                  },
                  e.id
                ),
              });
            })
          );
        }),
        ce = function () {
          return Object(_.jsxs)(n.Fragment, {
            children: [
              Object(_.jsx)("h3", {
                className: "text-primary",
                children: "Looking for Something?",
              }),
              Object(_.jsx)("p", {
                children: "Sorry, this page does not exist",
              }),
            ],
          });
        },
        se = function () {
          return (function () {
            var e = Object(u.a)(
              j.a.mark(function e(t) {
                var a;
                return j.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            t({ type: D }),
                            (e.next = 4),
                            p.a.get("/api/profile/me")
                          );
                        case 4:
                          (a = e.sent),
                            t({ type: w, payload: a.data }),
                            (e.next = 11);
                          break;
                        case 8:
                          (e.prev = 8),
                            (e.t0 = e.catch(0)),
                            t({
                              type: E,
                              payload: {
                                msg: e.t0.response.statusText,
                                status: e.t0.response.status,
                              },
                            });
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 8]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        },
        le = function (e, t) {
          var a =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return (function () {
            var n = Object(u.a)(
              j.a.mark(function n(r) {
                var i, c, s;
                return j.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            r({ type: D }),
                            (i = {
                              headers: { "Content-Type": "application/json" },
                            }),
                            (n.next = 5),
                            p.a.post("/api/profile", e, i)
                          );
                        case 5:
                          (c = n.sent),
                            r({ type: w, payload: c.data }),
                            r(
                              W(
                                a
                                  ? "Profile Updated"
                                  : "Profile Created, We will review your profile and it will verified and visible soon...",
                                "success"
                              )
                            ),
                            a || t.push("/dashboard"),
                            (n.next = 16);
                          break;
                        case 11:
                          (n.prev = 11),
                            (n.t0 = n.catch(0)),
                            (s = n.t0.response.data.errors) &&
                              s.forEach(function (e) {
                                return r(W(e.msg, "danger"));
                              }),
                            r({
                              type: E,
                              payload: {
                                msg: n.t0.response.statusText,
                                status: n.t0.response.status,
                              },
                            });
                        case 16:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })();
        },
        oe = function () {
          return (function () {
            var e = Object(u.a)(
              j.a.mark(function e(t) {
                return j.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            !window.confirm(
                              "Are you sure? This can NOT be undone!"
                            )
                          ) {
                            e.next = 12;
                            break;
                          }
                          return (
                            (e.prev = 1),
                            (e.next = 4),
                            p.a.delete("/api/profile")
                          );
                        case 4:
                          t({ type: C }),
                            t({ type: I }),
                            t(W("Your account has been permanantly deleted")),
                            (e.next = 12);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(1)),
                            t({
                              type: E,
                              payload: {
                                msg: e.t0.response.statusText,
                                status: e.t0.response.status,
                              },
                            });
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 9]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        },
        de = a(65),
        je = function () {
          return Object(_.jsx)("div", {
            style: { display: "flex", height: "50%", placeContent: "center" },
            children: Object(_.jsx)(de.a, {
              height: "100",
              width: "100",
              color: "white",
              wrapperStyle: {},
              wrapperClass: "",
              visible: !0,
              ariaLabel: "three-circles-rotating",
              outerCircleColor: "",
              innerCircleColor: "",
              middleCircleColor: "",
            }),
          });
        },
        ue = Object(o.b)(
          function (e) {
            return { auth: e.auth, profile: e.profile };
          },
          { getCurrentProfile: se }
        )(function (e) {
          var t = e.getCurrentProfile,
            a = e.profile,
            r = (a.profile, a.loading),
            i = e.auth;
          return (
            Object(n.useEffect)(
              function () {
                t();
              },
              [t]
            ),
            r
              ? Object(_.jsx)(je, {})
              : i.user.isSeller
              ? Object(_.jsx)(l.a, { to: "/dashboard" })
              : Object(_.jsx)(l.a, { to: "/profiles" })
          );
        }),
        be = a(22),
        pe = a.n(be),
        xe = Object(o.b)(
          function (e) {
            return { auth: e.auth };
          },
          { createProfile: le }
        )(
          Object(l.g)(function (e) {
            var t = e.createProfile,
              a = e.history,
              r = e.auth.user,
              i = Object(n.useState)({
                price: "",
                location: "Indore",
                status: "",
                skills: "",
                bio: "",
                phone: "",
                email: "",
                image: "",
                policeVerificationImage: "",
                addharImage: "",
                locationArray: Z.Indore,
                skillArray: {},
              }),
              c = Object(V.a)(i, 2),
              l = c[0],
              o = c[1],
              d = Object(n.useState)(!0),
              j = Object(V.a)(d, 2),
              u = j[0],
              b = j[1],
              p = l.price,
              x = l.location,
              h = l.skills,
              O = l.bio,
              f = l.phone,
              m = l.email,
              g = l.locationArray,
              v = l.skillArray,
              y = function (e) {
                var t, a;
                "location" !== e.target.name
                  ? "skills" !== e.target.name
                    ? o(
                        Object(ae.a)(
                          Object(ae.a)({}, l),
                          {},
                          Object(te.a)({}, e.target.name, e.target.value)
                        )
                      )
                    : o(
                        Object(ae.a)(
                          Object(ae.a)({}, l),
                          {},
                          ((t = {}),
                          Object(te.a)(t, e.target.name, e.target.value),
                          Object(te.a)(
                            t,
                            "skillArray",
                            $[e.target.value].array
                          ),
                          t)
                        )
                      )
                  : o(
                      Object(ae.a)(
                        Object(ae.a)({}, l),
                        {},
                        ((a = {}),
                        Object(te.a)(a, e.target.name, e.target.value),
                        Object(te.a)(a, "locationArray", Z[e.target.value]),
                        a)
                      )
                    );
              };
            return Object(_.jsxs)(n.Fragment, {
              children: [
                Object(_.jsx)("h1", {
                  className: "large text-primary",
                  children: "Create Profile",
                }),
                Object(_.jsxs)("p", {
                  className: "lead",
                  children: [
                    Object(_.jsx)("i", { className: "fas fa-user" }),
                    " Welcome ",
                    r && r.name,
                  ],
                }),
                Object(_.jsxs)("form", {
                  className: "form",
                  onSubmit: function (e) {
                    return (function (e) {
                      e.preventDefault(), t(l, a);
                    })(e);
                  },
                  children: [
                    Object(_.jsxs)("div", {
                      className: "form-group",
                      children: [
                        Object(_.jsx)("div", {
                          className: "form-text",
                          children:
                            "* Give us an idea of what kind of services you want to provide",
                        }),
                        Object(_.jsxs)("select", {
                          name: "skills",
                          value: h,
                          onChange: function (e) {
                            return y(e);
                          },
                          children: [
                            Object(_.jsx)("option", {
                              value: "0",
                              children:
                                "Select the Service you want to provide.",
                            }),
                            Object.keys($).map(function (e) {
                              return Object(_.jsx)("option", {
                                value: e,
                                children: e,
                              });
                            }),
                          ],
                        }),
                      ],
                    }),
                    h &&
                      Object(_.jsxs)("div", {
                        children: [
                          Object(_.jsxs)("div", {
                            children: ["Sub Skills of ", h],
                          }),
                          Object(_.jsx)("div", {
                            style: { display: "flex", flexWrap: "wrap" },
                            children: Object.keys(v).map(function (e) {
                              return Object(_.jsxs)("div", {
                                style: { minWidth: "150px", textAlign: "left" },
                                children: [
                                  Object(_.jsx)("input", {
                                    type: "checkbox",
                                    id: "skillArray",
                                    name: "skillArray",
                                    value: e,
                                    checked: v[e],
                                    onChange: function (t) {
                                      var a, n;
                                      (a = e),
                                        (n = 0 + t.target.checked),
                                        o(
                                          Object(ae.a)(
                                            Object(ae.a)({}, l),
                                            {},
                                            {
                                              skillArray: Object(ae.a)(
                                                Object(ae.a)({}, v),
                                                {},
                                                Object(te.a)({}, a, n)
                                              ),
                                            }
                                          )
                                        );
                                    },
                                  }),
                                  Object(_.jsx)("label", {
                                    for: "skillArray",
                                    children: e,
                                  }),
                                  Object(_.jsx)("br", {}),
                                ],
                              });
                            }),
                          }),
                        ],
                      }),
                    Object(_.jsxs)("div", {
                      className: "form-group",
                      children: [
                        Object(_.jsx)("div", {
                          className: "form-text",
                          children: "*Price you wanna ask(per hour).",
                        }),
                        Object(_.jsx)("input", {
                          type: "text",
                          name: "price",
                          value: p,
                          onChange: function (e) {
                            return y(e);
                          },
                        }),
                      ],
                    }),
                    Object(_.jsxs)("div", {
                      className: "form-group",
                      children: [
                        Object(_.jsx)("div", {
                          className: "form-text",
                          children:
                            "*Service Location (eg. Indore, Pune, Bangalore etc)",
                        }),
                        Object(_.jsxs)("select", {
                          name: "location",
                          value: x,
                          onChange: function (e) {
                            return y(e);
                          },
                          children: [
                            Object(_.jsx)("option", {
                              value: "Indore",
                              children: "Indore",
                            }),
                            Object(_.jsx)("option", {
                              value: "Pune",
                              children: "Pune",
                            }),
                            Object(_.jsx)("option", {
                              value: "Bangalore",
                              children: "Bangalore",
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(_.jsxs)("div", {
                      children: [
                        Object(_.jsxs)("div", {
                          children: ["Locations in ", x],
                        }),
                        Object(_.jsx)("div", {
                          style: { display: "flex", flexWrap: "wrap" },
                          children: Object.keys(g).map(function (e) {
                            return Object(_.jsxs)("div", {
                              style: { minWidth: "150px", textAlign: "left" },
                              children: [
                                Object(_.jsx)("input", {
                                  type: "checkbox",
                                  id: "locationArray",
                                  name: "locationArray",
                                  value: e,
                                  checked: g[e],
                                  onChange: function (t) {
                                    var a, n;
                                    (a = e),
                                      (n = 0 + t.target.checked),
                                      o(
                                        Object(ae.a)(
                                          Object(ae.a)({}, l),
                                          {},
                                          {
                                            locationArray: Object(ae.a)(
                                              Object(ae.a)({}, g),
                                              {},
                                              Object(te.a)({}, a, n)
                                            ),
                                          }
                                        )
                                      );
                                  },
                                }),
                                Object(_.jsx)("label", {
                                  for: "locationArray",
                                  children: e,
                                }),
                                Object(_.jsx)("br", {}),
                              ],
                            });
                          }),
                        }),
                      ],
                    }),
                    Object(_.jsxs)("div", {
                      className: "form-group",
                      children: [
                        Object(_.jsx)("div", {
                          className: "form-text",
                          children: "A short description of yours services",
                        }),
                        Object(_.jsx)("textarea", {
                          name: "bio",
                          value: O,
                          cols: "30",
                          rows: "5",
                          onChange: function (e) {
                            return y(e);
                          },
                        }),
                      ],
                    }),
                    Object(_.jsx)("div", {
                      className: "my-2 text-center",
                      children: Object(_.jsx)("button", {
                        onClick: function () {
                          return b(!u);
                        },
                        type: "button",
                        className: "btn btn-light text-center",
                        children: "Add Contact Details",
                      }),
                    }),
                    u &&
                      Object(_.jsxs)(n.Fragment, {
                        children: [
                          Object(_.jsxs)("div", {
                            className: "form-group contact-input",
                            children: [
                              Object(_.jsx)("i", {
                                className: "fas fa-phone fa-2x",
                              }),
                              Object(_.jsx)("input", {
                                type: "text",
                                placeholder: "Phone Number",
                                name: "phone",
                                value: f,
                                onChange: function (e) {
                                  return y(e);
                                },
                              }),
                            ],
                          }),
                          Object(_.jsxs)("div", {
                            className: "form-group contact-input",
                            children: [
                              Object(_.jsx)("i", {
                                className: "far fa-envelope fa-2x",
                              }),
                              Object(_.jsx)("input", {
                                type: "text",
                                placeholder: "Email ID",
                                name: "email",
                                value: m,
                                onChange: function (e) {
                                  return y(e);
                                },
                              }),
                            ],
                          }),
                        ],
                      }),
                    Object(_.jsx)("div", {
                      className: "form-group text-center",
                      children: Object(_.jsxs)("label", {
                        className: "form-text text-center",
                        children: [
                          "Add profile picture:",
                          " ",
                          Object(_.jsx)(pe.a, {
                            id: "image",
                            type: "file",
                            multiple: !1,
                            onDone: function (e) {
                              var t = e.base64;
                              return o(
                                Object(ae.a)(
                                  Object(ae.a)({}, l),
                                  {},
                                  { image: t }
                                )
                              );
                            },
                          }),
                        ],
                      }),
                    }),
                    Object(_.jsx)("div", {
                      className: "form-group text-center",
                      children: Object(_.jsxs)("label", {
                        className: "form-text text-center",
                        children: [
                          "Add Your Addhar Card Image for profile varification (Clear and Both side):",
                          " ",
                          Object(_.jsx)(pe.a, {
                            id: "addhar image",
                            type: "file",
                            multiple: !1,
                            onDone: function (e) {
                              var t = e.base64;
                              return o(
                                Object(ae.a)(
                                  Object(ae.a)({}, l),
                                  {},
                                  { addharImage: t }
                                )
                              );
                            },
                          }),
                        ],
                      }),
                    }),
                    Object(_.jsx)("div", {
                      className: "form-group text-center",
                      children: Object(_.jsxs)("label", {
                        className: "form-text text-center",
                        children: [
                          "Add Your Police Verification Image for profile varification (Clear):",
                          " ",
                          Object(_.jsx)(pe.a, {
                            id: "police verification",
                            type: "file",
                            multiple: !1,
                            onDone: function (e) {
                              var t = e.base64;
                              return o(
                                Object(ae.a)(
                                  Object(ae.a)({}, l),
                                  {},
                                  { policeVerificationImage: t }
                                )
                              );
                            },
                          }),
                        ],
                      }),
                    }),
                    Object(_.jsx)("input", {
                      type: "submit",
                      className: "btn btn-primary my-1",
                    }),
                    Object(_.jsx)("p", {
                      className: "small",
                      children: "* = required field",
                    }),
                    Object(_.jsx)(s.b, {
                      className: "btn btn-light my-1",
                      to: "/dashboard",
                      children: "Go Back",
                    }),
                  ],
                }),
              ],
            });
          })
        ),
        he = Object(o.b)(null, {
          deleteEducation: function (e) {
            return (function () {
              var t = Object(u.a)(
                j.a.mark(function t(a) {
                  var n;
                  return j.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.next = 3),
                              p.a.delete("/api/profile/education/".concat(e))
                            );
                          case 3:
                            (n = t.sent),
                              a({ type: A, payload: n.data }),
                              a(W("Education Removed", "success")),
                              (t.next = 11);
                            break;
                          case 8:
                            (t.prev = 8),
                              (t.t0 = t.catch(0)),
                              a({
                                type: E,
                                payload: {
                                  msg: t.t0.response.statusText,
                                  status: t.t0.response.status,
                                },
                              });
                          case 11:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 8]]
                  );
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })();
          },
        })(function (e) {
          var t = e.education,
            a = void 0 === t ? [] : t,
            r = e.deleteEducation,
            i = e.action,
            c = void 0 === i || i,
            s = a.map(function (e) {
              return Object(_.jsxs)(
                "tr",
                {
                  children: [
                    Object(_.jsx)("td", {
                      style: { background: "white", color: "black" },
                      children: e.degree,
                    }),
                    Object(_.jsx)("td", {
                      style: { background: "white", color: "black" },
                      children: e.description,
                    }),
                    c &&
                      Object(_.jsx)("td", {
                        style: { background: "white" },
                        children: Object(_.jsx)("button", {
                          onClick: function () {
                            return r(e._id);
                          },
                          className: "btn btn-danger",
                          children: "Delete",
                        }),
                      }),
                  ],
                },
                e._id
              );
            });
          return Object(_.jsx)(n.Fragment, {
            children:
              a.length > 0 &&
              Object(_.jsxs)(_.Fragment, {
                children: [
                  Object(_.jsx)("h3", { children: "Tranings/Education" }),
                  Object(_.jsxs)("table", {
                    className: "table",
                    children: [
                      Object(_.jsx)("thead", {
                        children: Object(_.jsxs)("tr", {
                          children: [
                            Object(_.jsx)("th", {
                              style: { color: "black" },
                              children: "Degree",
                            }),
                            Object(_.jsx)("th", {
                              style: { color: "black" },
                              children: "Description",
                            }),
                            c &&
                              Object(_.jsx)("th", {
                                style: { color: "black", width: "100px" },
                                children: "Action",
                              }),
                          ],
                        }),
                      }),
                      Object(_.jsx)("tbody", { children: s }),
                    ],
                  }),
                ],
              }),
          });
        }),
        Oe = function (e) {
          var t = e.title,
            a = e.imageSrc,
            r = Object(n.useState)(!0),
            i = Object(V.a)(r, 2),
            c = i[0],
            s = i[1];
          return Object(_.jsx)("div", {
            children:
              a &&
              "" !== a &&
              Object(_.jsxs)(_.Fragment, {
                children: [
                  Object(_.jsxs)("div", {
                    onClick: function () {
                      s(!c);
                    },
                    style: {
                      border: "3px solid white",
                      padding: "10px",
                      display: "flex",
                      justifyContent: "space-between",
                    },
                    children: [
                      Object(_.jsx)("div", { children: t }),
                      Object(_.jsx)("div", { children: c ? "^" : ">" }),
                    ],
                  }),
                  c &&
                    Object(_.jsx)("div", {
                      style: { height: "50%", alignContent: "center" },
                      children: Object(_.jsx)("img", {
                        style: { height: "80vh", objectFit: "contain" },
                        src: a,
                      }),
                    }),
                ],
              }),
          });
        },
        fe = Object(o.b)(
          function (e) {
            return { profile: e.profile, auth: e.auth };
          },
          { createProfile: le, getCurrentProfile: se, deleteAccount: oe }
        )(
          Object(l.g)(function (e) {
            var t,
              a = e.profile,
              r = a.profile,
              i = a.loading,
              c = e.auth.user,
              l = e.createProfile,
              o = e.getCurrentProfile,
              d = (e.deleteAccount, e.history),
              j = Object(n.useState)({
                price: "",
                location: "",
                status: "",
                skills: "",
                bio: "",
                phone: "",
                email: "",
                image: "",
                policeVerificationImage: "",
                addharImage: "",
                locationArray: {},
                skillArray: {},
              }),
              u = Object(V.a)(j, 2),
              b = u[0],
              p = u[1],
              x = Object(n.useState)(!1),
              h = Object(V.a)(x, 2),
              O = h[0],
              f = h[1];
            Object(n.useEffect)(
              function () {
                var e, t;
                i ||
                  p({
                    location: (null === r || void 0 === r ? void 0 : r.location)
                      ? null === r || void 0 === r
                        ? void 0
                        : r.location
                      : "",
                    skills: (null === r || void 0 === r ? void 0 : r.skills)
                      ? null === r || void 0 === r
                        ? void 0
                        : r.skills
                      : "",
                    price: (null === r || void 0 === r ? void 0 : r.price)
                      ? null === r || void 0 === r
                        ? void 0
                        : r.price
                      : "",
                    bio: (null === r || void 0 === r ? void 0 : r.bio)
                      ? null === r || void 0 === r
                        ? void 0
                        : r.bio
                      : "",
                    phone: (null === r || void 0 === r ? void 0 : r.info)
                      ? null === r ||
                        void 0 === r ||
                        null === (e = r.info) ||
                        void 0 === e
                        ? void 0
                        : e.phone
                      : "",
                    email: (null === r || void 0 === r ? void 0 : r.info)
                      ? null === r ||
                        void 0 === r ||
                        null === (t = r.info) ||
                        void 0 === t
                        ? void 0
                        : t.email
                      : "",
                    image: (null === r || void 0 === r ? void 0 : r.image)
                      ? null === r || void 0 === r
                        ? void 0
                        : r.image
                      : "",
                    policeVerificationImage: (
                      null === r || void 0 === r
                        ? void 0
                        : r.policeVerificationImage
                    )
                      ? null === r || void 0 === r
                        ? void 0
                        : r.policeVerificationImage
                      : "",
                    addharImage: (
                      null === r || void 0 === r ? void 0 : r.addharImage
                    )
                      ? null === r || void 0 === r
                        ? void 0
                        : r.addharImage
                      : "",
                    locationArray: (
                      null === r || void 0 === r ? void 0 : r.locationArray
                    )
                      ? null === r || void 0 === r
                        ? void 0
                        : r.locationArray
                      : {},
                    skillArray: (
                      null === r || void 0 === r ? void 0 : r.skillArray
                    )
                      ? null === r || void 0 === r
                        ? void 0
                        : r.skillArray
                      : {},
                  });
              },
              [i]
            ),
              Object(n.useEffect)(function () {
                o();
              }, []);
            var m = b.price,
              g = b.location,
              v = b.skills,
              y = b.bio,
              N = b.phone,
              k = b.email,
              w = b.image,
              S = b.policeVerificationImage,
              A = b.addharImage,
              C = b.locationArray,
              E = b.skillArray,
              I = function (e) {
                var t, a;
                "location" !== e.target.name
                  ? "skills" !== e.target.name
                    ? p(
                        Object(ae.a)(
                          Object(ae.a)({}, b),
                          {},
                          Object(te.a)({}, e.target.name, e.target.value)
                        )
                      )
                    : p(
                        Object(ae.a)(
                          Object(ae.a)({}, b),
                          {},
                          ((t = {}),
                          Object(te.a)(t, e.target.name, e.target.value),
                          Object(te.a)(
                            t,
                            "skillArray",
                            $[e.target.value].array
                          ),
                          t)
                        )
                      )
                  : p(
                      Object(ae.a)(
                        Object(ae.a)({}, b),
                        {},
                        ((a = {}),
                        Object(te.a)(a, e.target.name, e.target.value),
                        Object(te.a)(a, "locationArray", Z[e.target.value]),
                        a)
                      )
                    );
              };
            return i
              ? Object(_.jsx)(je, {})
              : Object(_.jsxs)(n.Fragment, {
                  children: [
                    Object(_.jsx)("h1", {
                      className: "large text-primary text-center",
                      children: "Edit Profile",
                    }),
                    Object(_.jsx)("h2", {
                      children:
                        "PENDING" ===
                          (null === r || void 0 === r
                            ? void 0
                            : r.verificationStatus) &&
                        Object(_.jsx)("div", {
                          style: { textAlign: "center" },
                          children:
                            "We are working on your profile verification",
                        }),
                    }),
                    Object(_.jsx)("br", {}),
                    Object(_.jsx)("br", {}),
                    Object(_.jsx)("br", {}),
                    Object(_.jsxs)("p", {
                      className: "text-center lead",
                      children: [
                        Object(_.jsx)("i", { className: "fas fa-user" }),
                        " Welcome ",
                        c && c.name,
                      ],
                    }),
                    Object(_.jsxs)("div", {
                      className: "text-center",
                      children: [
                        " ",
                        Object(_.jsx)("img", {
                          class: "round-img avatar-img my-1",
                          src:
                            w ||
                            (null === r ||
                            void 0 === r ||
                            null === (t = r.user) ||
                            void 0 === t
                              ? void 0
                              : t.avatar),
                          alt: "",
                        }),
                      ],
                    }),
                    Object(_.jsxs)("form", {
                      className: "form",
                      onSubmit: function (e) {
                        return (function (e) {
                          e.preventDefault(), l(b, d, !0);
                        })(e);
                      },
                      children: [
                        Object(_.jsx)("div", {
                          className: "form-group my-2",
                          children: Object(_.jsxs)("label", {
                            className: "form-text text-center",
                            children: [
                              "Edit profile image:",
                              "  ",
                              Object(_.jsx)(pe.a, {
                                id: "image",
                                type: "file",
                                multiple: !1,
                                onDone: function (e) {
                                  var t = e.base64;
                                  return p(
                                    Object(ae.a)(
                                      Object(ae.a)({}, b),
                                      {},
                                      { image: t }
                                    )
                                  );
                                },
                              }),
                            ],
                          }),
                        }),
                        Object(_.jsxs)("div", {
                          className: "form-group",
                          children: [
                            Object(_.jsxs)("div", {
                              className: "form-group",
                              children: [
                                Object(_.jsx)("div", {
                                  className: "form-text",
                                  children:
                                    "* Give us an idea of what kind of services you want to provide",
                                }),
                                Object(_.jsxs)("select", {
                                  name: "skills",
                                  value: v,
                                  onChange: function (e) {
                                    return I(e);
                                  },
                                  children: [
                                    Object(_.jsx)("option", {
                                      value: "0",
                                      children:
                                        "* Select the Service you want to provide.",
                                    }),
                                    Object(_.jsx)("option", {
                                      value: "Baby sitting",
                                      children: "Baby sitting",
                                    }),
                                    Object(_.jsx)("option", {
                                      value: "Plumbing",
                                      children: "Plumbing",
                                    }),
                                    Object(_.jsx)("option", {
                                      value: "House Keeping",
                                      children: "House Keeping",
                                    }),
                                    Object(_.jsx)("option", {
                                      value: "Tutoring",
                                      children: "Tutoring",
                                    }),
                                    Object(_.jsx)("option", {
                                      value: "Electrical Services",
                                      children: "Electrical Services",
                                    }),
                                    Object(_.jsx)("option", {
                                      value: "Moving and delivery",
                                      children: "Moving and delivery",
                                    }),
                                    Object(_.jsx)("option", {
                                      value: "Personal Care",
                                      children:
                                        "Personal Care(like haicut, manicure)",
                                    }),
                                    Object(_.jsx)("option", {
                                      value: "Catering Services",
                                      children: "Catering Services",
                                    }),
                                    Object(_.jsx)("option", {
                                      value: "Other",
                                      children: "Other",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            v &&
                              Object(_.jsxs)("div", {
                                children: [
                                  Object(_.jsxs)("div", {
                                    children: ["Sub Skills of ", v],
                                  }),
                                  Object(_.jsx)("div", {
                                    style: {
                                      display: "flex",
                                      flexWrap: "wrap",
                                    },
                                    children: Object.keys(E).map(function (e) {
                                      return Object(_.jsxs)("div", {
                                        style: {
                                          minWidth: "150px",
                                          textAlign: "left",
                                        },
                                        children: [
                                          Object(_.jsx)("input", {
                                            type: "checkbox",
                                            id: "skillArray",
                                            name: "skillArray",
                                            value: e,
                                            checked: E[e],
                                            onChange: function (t) {
                                              var a, n;
                                              (a = e),
                                                (n = 0 + t.target.checked),
                                                p(
                                                  Object(ae.a)(
                                                    Object(ae.a)({}, b),
                                                    {},
                                                    {
                                                      skillArray: Object(ae.a)(
                                                        Object(ae.a)({}, E),
                                                        {},
                                                        Object(te.a)({}, a, n)
                                                      ),
                                                    }
                                                  )
                                                );
                                            },
                                          }),
                                          Object(_.jsx)("label", {
                                            for: "skillArray",
                                            children: e,
                                          }),
                                          Object(_.jsx)("br", {}),
                                        ],
                                      });
                                    }),
                                  }),
                                ],
                              }),
                            Object(_.jsxs)("div", {
                              className: "form-group",
                              children: [
                                Object(_.jsx)("div", {
                                  className: "form-text",
                                  children: "*Price you wanna ask(per hour).",
                                }),
                                Object(_.jsx)("input", {
                                  type: "text",
                                  name: "price",
                                  value: m,
                                  onChange: function (e) {
                                    return I(e);
                                  },
                                }),
                              ],
                            }),
                            Object(_.jsxs)("div", {
                              className: "form-group",
                              children: [
                                Object(_.jsx)("div", {
                                  className: "form-text",
                                  children:
                                    "*Service Location (eg. Indore, Pune, Bangalore etc)",
                                }),
                                Object(_.jsxs)("select", {
                                  name: "location",
                                  value: g,
                                  onChange: function (e) {
                                    return I(e);
                                  },
                                  children: [
                                    Object(_.jsx)("option", {
                                      value: "Indore",
                                      children: "Indore",
                                    }),
                                    Object(_.jsx)("option", {
                                      value: "Pune",
                                      children: "Pune",
                                    }),
                                    Object(_.jsx)("option", {
                                      value: "Bangalore",
                                      children: "Bangalore",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(_.jsxs)("div", {
                              children: [
                                Object(_.jsxs)("div", {
                                  children: ["Locations in ", g],
                                }),
                                Object(_.jsx)("div", {
                                  style: { display: "flex", flexWrap: "wrap" },
                                  children: Object.keys(C).map(function (e) {
                                    return Object(_.jsxs)("div", {
                                      style: {
                                        minWidth: "150px",
                                        textAlign: "left",
                                      },
                                      children: [
                                        Object(_.jsx)("input", {
                                          type: "checkbox",
                                          id: "locationArray",
                                          name: "locationArray",
                                          value: e,
                                          checked: C[e],
                                          onChange: function (t) {
                                            var a, n;
                                            (a = e),
                                              (n = 0 + t.target.checked),
                                              p(
                                                Object(ae.a)(
                                                  Object(ae.a)({}, b),
                                                  {},
                                                  {
                                                    locationArray: Object(ae.a)(
                                                      Object(ae.a)({}, C),
                                                      {},
                                                      Object(te.a)({}, a, n)
                                                    ),
                                                  }
                                                )
                                              );
                                          },
                                        }),
                                        Object(_.jsx)("label", {
                                          for: "locationArray",
                                          children: e,
                                        }),
                                        Object(_.jsx)("br", {}),
                                      ],
                                    });
                                  }),
                                }),
                              ],
                            }),
                            Object(_.jsxs)("div", {
                              className: "form-group",
                              children: [
                                Object(_.jsx)("div", {
                                  className: "form-text",
                                  children:
                                    "A brief description of yours services",
                                }),
                                Object(_.jsx)("textarea", {
                                  name: "bio",
                                  value: y,
                                  cols: "30",
                                  rows: "5",
                                  onChange: function (e) {
                                    return I(e);
                                  },
                                }),
                              ],
                            }),
                            Object(_.jsx)("div", {
                              className: "my-2",
                              children: Object(_.jsxs)("button", {
                                onClick: function () {
                                  return f(!O);
                                },
                                type: "button",
                                className: "btn btn-light",
                                children: [
                                  Object(_.jsx)("i", {
                                    className: "fas fa-pen text-primary",
                                  }),
                                  " Edit Contact Details",
                                ],
                              }),
                            }),
                            O &&
                              Object(_.jsxs)(n.Fragment, {
                                children: [
                                  Object(_.jsxs)("div", {
                                    className: "form-group contact-input",
                                    children: [
                                      Object(_.jsx)("i", {
                                        className: "fas fa-phone fa-2x",
                                      }),
                                      Object(_.jsx)("input", {
                                        type: "text",
                                        placeholder: "Phone Number",
                                        name: "phone",
                                        value: N,
                                        onChange: function (e) {
                                          return I(e);
                                        },
                                      }),
                                    ],
                                  }),
                                  Object(_.jsxs)("div", {
                                    className: "form-group contact-input",
                                    children: [
                                      Object(_.jsx)("i", {
                                        className: "far fa-envelope fa-2x",
                                      }),
                                      Object(_.jsx)("input", {
                                        type: "text",
                                        placeholder: "Email ID",
                                        name: "email",
                                        value: k,
                                        onChange: function (e) {
                                          return I(e);
                                        },
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            Object(_.jsx)("div", {
                              className: "form-group",
                              children: Object(_.jsxs)(s.b, {
                                to: "/add-education",
                                className: "btn btn-light",
                                children: [
                                  Object(_.jsx)("i", {
                                    className:
                                      "fas fa-graduation-cap text-primary",
                                  }),
                                  " Add Training",
                                ],
                              }),
                            }),
                            Object(_.jsx)(he, {
                              education:
                                null === r || void 0 === r
                                  ? void 0
                                  : r.education,
                            }),
                            Object(_.jsx)("div", {
                              className: "form-group text-center",
                              children: Object(_.jsxs)("label", {
                                className: "form-text text-center",
                                children: [
                                  "Add Your Addhar Card Image for profile varification (Clear and Both side):",
                                  " ",
                                  Object(_.jsx)(pe.a, {
                                    id: "addhar image",
                                    type: "file",
                                    multiple: !1,
                                    onDone: function (e) {
                                      var t = e.base64;
                                      return p(
                                        Object(ae.a)(
                                          Object(ae.a)({}, b),
                                          {},
                                          { addharImage: t }
                                        )
                                      );
                                    },
                                  }),
                                ],
                              }),
                            }),
                            Object(_.jsx)(Oe, {
                              title: "Addhar Card",
                              imageSrc: A,
                            }),
                            Object(_.jsx)("br", {}),
                            Object(_.jsx)("div", {
                              className: "form-group text-center",
                              children: Object(_.jsxs)("label", {
                                className: "form-text text-center",
                                children: [
                                  "Add Your Police Verification Image for profile varification (Clear):",
                                  " ",
                                  Object(_.jsx)(pe.a, {
                                    id: "police verification",
                                    type: "file",
                                    multiple: !1,
                                    onDone: function (e) {
                                      var t = e.base64;
                                      return p(
                                        Object(ae.a)(
                                          Object(ae.a)({}, b),
                                          {},
                                          { policeVerificationImage: t }
                                        )
                                      );
                                    },
                                  }),
                                ],
                              }),
                            }),
                            Object(_.jsx)(Oe, {
                              title: "Police Verification Image",
                              imageSrc: S,
                            }),
                          ],
                        }),
                        Object(_.jsx)("input", {
                          type: "submit",
                          className: "btn btn-primary my-1",
                        }),
                      ],
                    }),
                    Object(_.jsx)("p", {
                      className: "small",
                      children: "* = required field",
                    }),
                  ],
                });
          })
        ),
        me = Object(o.b)(null, {
          addEducation: function (e, t) {
            return (function () {
              var a = Object(u.a)(
                j.a.mark(function a(n) {
                  var r, i, c;
                  return j.a.wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (a.prev = 0),
                              (r = {
                                headers: { "Content-Type": "application/json" },
                              }),
                              (a.next = 4),
                              p.a.put("/api/profile/education", e, r)
                            );
                          case 4:
                            (i = a.sent),
                              n({ type: A, payload: i.data }),
                              n(W("Training Added", "success")),
                              t.push("/dashboard"),
                              (a.next = 15);
                            break;
                          case 10:
                            (a.prev = 10),
                              (a.t0 = a.catch(0)),
                              (c = a.t0.response.data.errors) &&
                                c.forEach(function (e) {
                                  return n(W(e.msg, "danger"));
                                }),
                              n({
                                type: E,
                                payload: {
                                  msg: a.t0.response.statusText,
                                  status: a.t0.response.status,
                                },
                              });
                          case 15:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[0, 10]]
                  );
                })
              );
              return function (e) {
                return a.apply(this, arguments);
              };
            })();
          },
        })(
          Object(l.g)(function (e) {
            var t = e.addEducation,
              a = e.history,
              r = Object(n.useState)({
                degree: "",
                location: "",
                description: "",
              }),
              i = Object(V.a)(r, 2),
              c = i[0],
              l = i[1],
              o = c.degree,
              d = c.location,
              j = c.description,
              u = function (e) {
                return l(
                  Object(ae.a)(
                    Object(ae.a)({}, c),
                    {},
                    Object(te.a)({}, e.target.name, e.target.value)
                  )
                );
              };
            return Object(_.jsxs)(n.Fragment, {
              children: [
                Object(_.jsx)("h1", {
                  class: "large text-primary",
                  children: "Add Your Training",
                }),
                Object(_.jsx)("p", {
                  class: "lead",
                  children: "Add any formal training that you have attained",
                }),
                Object(_.jsx)("p", {
                  className: "small",
                  children: "* = required field",
                }),
                Object(_.jsxs)("form", {
                  class: "form",
                  onSubmit: function (e) {
                    e.preventDefault(), t(c, a);
                  },
                  children: [
                    Object(_.jsxs)("div", {
                      class: "form-group",
                      children: [
                        Object(_.jsx)("div", {
                          className: "form-text",
                          children: "* Degree or Certificate",
                        }),
                        Object(_.jsx)("input", {
                          type: "text",
                          name: "degree",
                          value: o,
                          onChange: function (e) {
                            return u(e);
                          },
                          required: !0,
                        }),
                      ],
                    }),
                    Object(_.jsxs)("div", {
                      class: "form-group",
                      children: [
                        Object(_.jsx)("div", {
                          className: "form-text",
                          children: "Location",
                        }),
                        Object(_.jsx)("input", {
                          type: "text",
                          name: "location",
                          value: d,
                          onChange: function (e) {
                            return u(e);
                          },
                        }),
                      ],
                    }),
                    Object(_.jsxs)("div", {
                      class: "form-group",
                      children: [
                        Object(_.jsx)("div", {
                          className: "form-text",
                          children: "Training Description",
                        }),
                        Object(_.jsx)("textarea", {
                          name: "description",
                          cols: "30",
                          rows: "5",
                          value: j,
                          onChange: function (e) {
                            return u(e);
                          },
                        }),
                      ],
                    }),
                    Object(_.jsx)("input", {
                      type: "submit",
                      class: "btn btn-primary my-1",
                    }),
                    Object(_.jsx)(s.b, {
                      class: "btn btn-light my-1",
                      to: "/dashboard",
                      children: "Go Back",
                    }),
                  ],
                }),
              ],
            });
          })
        ),
        ge = function (e) {
          var t = e.value,
            a = e.text;
          e.color;
          return Object(_.jsxs)("div", {
            style: {
              fontSize: "15px",
              fontWeight: "700",
              justifyContent: "center",
              borderRadius: "2px",
              padding: "0 0 0 4px",
              backgroundColor: "hsla(0,0%,100%,.9)",
              alignItems: "center",
              display: "flex",
            },
            children: [
              Object(_.jsx)("span", {
                children: Object(_.jsx)("i", {
                  style: { color: "#f5e942" },
                  className: "fas fa-star",
                }),
              }),
              Object(_.jsxs)("span", {
                children: [
                  "\xa0",
                  t,
                  "\xa0",
                  a && "" !== a && "|",
                  "\xa0",
                  a,
                  "\xa0",
                ],
              }),
            ],
          });
        };
      ge.defaultProps = { color: "#111111" };
      var ve = ge,
        ye = function (e) {
          var t = e.locationArray,
            a = void 0 === t ? {} : t;
          return Object(_.jsx)("div", {
            style: { flexWrap: "wrap", display: "flex" },
            children: Object.keys(a).map(function (e) {
              if (a[e])
                return Object(_.jsx)("span", {
                  style: {
                    background: "gray",
                    padding: "5px",
                    marginRight: "5px",
                    borderRadius: "100px",
                    color: "white",
                  },
                  children: e,
                });
            }),
          });
        },
        Ne = function (e) {
          var t = e.actionOnCardClick,
            a = e.showLink,
            n = void 0 === a || a,
            r = e.profile,
            i = r.user,
            c = i._id,
            l = i.name,
            o = i.avatar,
            d = (r.locationArray, r.skillArray, r.image),
            j = r.price,
            u = (r.info, r.location),
            b = r.skills,
            p = r.rating,
            x = r.numReviews;
          return Object(_.jsxs)("div", {
            onClick: t,
            style: {
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              maxWidth: "400px",
              flex: "1",
              minWidth: "300px",
              margin: "20px",
              textAlign: "center",
              fontFamily: "arial",
              color: "black",
              background: "white",
              position: "relative",
            },
            children: [
              Object(_.jsx)("div", {
                style: {
                  position: "absolute",
                  top: "310px",
                  paddingLeft: "10px",
                },
                children: Object(_.jsx)(ve, { value: p, text: x }),
              }),
              Object(_.jsx)("img", {
                src: d || o,
                alt: "",
                style: { width: "100%", height: "350px", zIndex: -1 },
              }),
              Object(_.jsxs)("div", {
                style: { padding: "20px", paddingTop: "0px" },
                children: [
                  Object(_.jsxs)("div", {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "22px",
                      color: "gray",
                    },
                    children: [
                      Object(_.jsx)("div", { children: u }),
                      Object(_.jsx)("div", { children: b }),
                    ],
                  }),
                  Object(_.jsx)("h1", { children: l }),
                  Object(_.jsxs)("p", {
                    children: [
                      "Avg Price: ",
                      Object(_.jsxs)("span", {
                        style: { color: "grey", fontSize: "22px" },
                        children: ["Rs.", j],
                      }),
                    ],
                  }),
                  n
                    ? Object(_.jsx)(s.b, {
                        to: "/profile/".concat(c),
                        className: "btn my",
                        style: { border: "1px solid black" },
                        children: "See Details",
                      })
                    : Object(_.jsx)("div", {
                        className: "btn my",
                        style: { border: "1px solid black" },
                        children: "See Details",
                      }),
                ],
              }),
            ],
          });
        },
        ke = Object(o.b)(
          function (e) {
            return { profile: e.profile };
          },
          {
            getCurrentProfile: se,
            getProfiles: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "";
              return (function () {
                var a = Object(u.a)(
                  j.a.mark(function a(n) {
                    var r;
                    return j.a.wrap(
                      function (a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              return (
                                n({ type: C }),
                                (a.prev = 1),
                                (a.next = 4),
                                p.a.get(
                                  "/api/profile?keyword="
                                    .concat(e, "&city=")
                                    .concat(t)
                                )
                              );
                            case 4:
                              (r = a.sent),
                                n({ type: S, payload: r.data }),
                                (a.next = 11);
                              break;
                            case 8:
                              (a.prev = 8),
                                (a.t0 = a.catch(1)),
                                n({
                                  type: E,
                                  payload: {
                                    msg: a.t0.response.statusText,
                                    status: a.t0.response.status,
                                  },
                                });
                            case 11:
                            case "end":
                              return a.stop();
                          }
                      },
                      a,
                      null,
                      [[1, 8]]
                    );
                  })
                );
                return function (e) {
                  return a.apply(this, arguments);
                };
              })();
            },
          }
        )(function (e) {
          var t = e.history,
            a = e.getProfiles,
            r = e.getCurrentProfile,
            i = e.profile,
            c = (i.profile, i.profiles),
            s = i.loading,
            l = e.match.params,
            o = l.keyword,
            d = l.city;
          return (
            Object(n.useEffect)(
              function () {
                a(o, d), r();
              },
              [a, o, r, d]
            ),
            Object(_.jsxs)(n.Fragment, {
              children: [
                Object(_.jsxs)("h1", {
                  className: "large text-primary text-center",
                  children: [
                    o || "All",
                    " Services ",
                    d && "in ".concat(d),
                    " ",
                    o && $[o].icon,
                    " ",
                  ],
                }),
                Object(_.jsxs)("p", {
                  className: "lead text-center",
                  children: [
                    Object(_.jsx)("i", { className: "fab fa-connectdevelop" }),
                    " Browse one step solution for all your Service needs",
                  ],
                }),
                s
                  ? Object(_.jsx)(je, {})
                  : Object(_.jsxs)("div", {
                      children: [
                        o &&
                          Object(_.jsx)("div", {
                            className: "form-group",
                            style: { textAlign: "center" },
                            children: Object(_.jsxs)("select", {
                              name: "location",
                              style: {
                                width: "200px",
                                padding: "10px",
                                fontSize: "20px",
                              },
                              value: d,
                              onChange: function (e) {
                                return t.push(
                                  "/search/"
                                    .concat(o, "/")
                                    .concat(e.target.value)
                                );
                              },
                              children: [
                                Object(_.jsx)("option", {
                                  value: "",
                                  className: "text-dark",
                                  children: "City",
                                }),
                                Object(_.jsx)("option", {
                                  value: "Indore",
                                  children: "Indore",
                                }),
                                Object(_.jsx)("option", {
                                  value: "Pune",
                                  children: "Pune",
                                }),
                                Object(_.jsx)("option", {
                                  value: "Bangalore",
                                  children: "Bangalore",
                                }),
                              ],
                            }),
                          }),
                        Object(_.jsx)("div", {
                          style: { display: "flex", flexWrap: "wrap" },
                          children:
                            c.length > 0
                              ? c.map(function (e) {
                                  return Object(_.jsx)(
                                    Ne,
                                    { profile: e },
                                    e._id
                                  );
                                })
                              : Object(_.jsx)("h4", {
                                  children: "No profiles found...",
                                }),
                        }),
                      ],
                    }),
              ],
            })
          );
        }),
        we = function (e) {
          var t = e.profile,
            a = t.location,
            n = t.locationArray,
            r = void 0 === n ? {} : n,
            i = t.skillArray,
            c = void 0 === i ? {} : i,
            s = t.skills,
            l = t.info,
            o = t.price,
            d = t.user,
            j = d.name,
            u = d.avatar,
            b = t.image,
            p = t.bio,
            x = t.rating,
            h = t.numReviews;
          return Object(_.jsxs)("div", {
            style: { display: "flex", flexWrap: "wrap" },
            children: [
              Object(_.jsxs)("div", {
                style: {
                  background: "white",
                  color: "black",
                  padding: "10px",
                  borderRadius: "10px",
                  flex: "4",
                  minWidth: "300px",
                  margin: "10px",
                  position: "relative",
                },
                children: [
                  Object(_.jsx)("div", {
                    style: {
                      position: "absolute",
                      top: "325px",
                      paddingLeft: "10px",
                    },
                    children: Object(_.jsx)(ve, { value: x, text: h }),
                  }),
                  Object(_.jsx)("img", {
                    src: b || u,
                    alt: "",
                    style: { width: "100%", height: "350px", zIndex: -1 },
                  }),
                  Object(_.jsxs)("div", {
                    style: { padding: "20px", paddingTop: "0px" },
                    children: [
                      Object(_.jsx)("h1", {
                        style: { fontWeight: 900, fontSize: "35px" },
                        children: j,
                      }),
                      Object(_.jsxs)("p", {
                        children: [
                          Object(_.jsx)("i", {
                            className: "fas fa-phone",
                            style: { color: "gray", scale: "2" },
                          }),
                          "\xa0\xa0\xa0\xa0",
                          Object(_.jsx)("span", {
                            style: { fontSize: "22px" },
                            children:
                              null === l || void 0 === l ? void 0 : l.phone,
                          }),
                        ],
                      }),
                      Object(_.jsxs)("p", {
                        children: [
                          " ",
                          Object(_.jsx)("i", {
                            className: "far fa-envelope",
                            style: { color: "gray", scale: "2" },
                          }),
                          "\xa0\xa0\xa0\xa0",
                          Object(_.jsx)("span", {
                            style: { fontSize: "22px" },
                            children:
                              null === l || void 0 === l ? void 0 : l.email,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(_.jsxs)("div", {
                style: {
                  background: "white",
                  color: "black",
                  padding: "10px",
                  borderRadius: "10px",
                  flex: "8",
                  minWidth: "300px",
                  margin: "10px",
                },
                children: [
                  Object(_.jsxs)("div", {
                    style: { marginBottom: "10px" },
                    children: [
                      Object(_.jsx)("div", {
                        style: { fontSize: "25px", fontWeight: 900 },
                        children: "About ",
                      }),
                      p,
                      "        ",
                    ],
                  }),
                  Object(_.jsxs)("div", {
                    children: [
                      Object(_.jsxs)("div", {
                        style: {
                          fontSize: "25px",
                          color: "gray",
                          display: "flex",
                          alignItems: "center",
                        },
                        children: [
                          "Service Provided:",
                          Object(_.jsxs)("span", {
                            style: {
                              fontSize: "25px",
                              color: "black",
                              fontWeight: 900,
                              display: "flex",
                            },
                            children: [" ", s, " ", s && $[s].icon],
                          }),
                        ],
                      }),
                      Object(_.jsx)("div", {
                        children: Object(_.jsx)(ye, { locationArray: c }),
                      }),
                    ],
                  }),
                  Object(_.jsx)("br", {}),
                  Object(_.jsxs)("div", {
                    children: [
                      Object(_.jsxs)("div", {
                        style: {
                          fontSize: "25px",
                          color: "gray",
                          display: "flex",
                          alignItems: "center",
                        },
                        children: [
                          "Location:",
                          Object(_.jsxs)("span", {
                            style: {
                              fontSize: "25px",
                              color: "black",
                              fontWeight: 900,
                            },
                            children: [" ", a, " "],
                          }),
                        ],
                      }),
                      Object(_.jsx)("div", {
                        children: Object(_.jsx)(ye, { locationArray: r }),
                      }),
                    ],
                  }),
                  Object(_.jsx)("br", {}),
                  Object(_.jsx)("div", {
                    children: Object(_.jsxs)("div", {
                      style: {
                        fontSize: "20px",
                        color: "gray",
                        display: "flex",
                        alignItems: "center",
                      },
                      children: [
                        "Average Price:",
                        Object(_.jsxs)("span", {
                          style: {
                            fontSize: "30px",
                            color: "black",
                            fontWeight: 900,
                          },
                          children: [" Rs ", o, " "],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        Se = function (e) {
          var t = e.education,
            a = t.degree,
            n = t.location,
            r = t.description;
          e.bio;
          return Object(_.jsxs)("div", {
            style: { borderTop: "1px solid gray" },
            children: [
              Object(_.jsx)("h3", { className: "text-dark", children: a }),
              Object(_.jsxs)("p", {
                children: [
                  Object(_.jsx)("strong", { children: "Location: " }),
                  " ",
                  n,
                ],
              }),
              Object(_.jsxs)("p", {
                children: [
                  Object(_.jsx)("strong", { children: "Description: " }),
                  " ",
                  r,
                ],
              }),
            ],
          });
        },
        Ae = Object(o.b)(
          function (e) {
            return { profile: e.profile, auth: e.auth };
          },
          {
            createSellerReview: function (e, t) {
              return (function () {
                var a = Object(u.a)(
                  j.a.mark(function a(n) {
                    var r, i, c;
                    return j.a.wrap(
                      function (a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              return (
                                (a.prev = 0),
                                (r = {
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                }),
                                (a.next = 4),
                                p.a.post(
                                  "/api/profile/user/".concat(e, "/reviews"),
                                  t,
                                  r
                                )
                              );
                            case 4:
                              (i = a.sent),
                                n({ type: P, payload: i.data }),
                                n(W("Review Added", "success")),
                                (a.next = 15);
                              break;
                            case 9:
                              (a.prev = 9),
                                (a.t0 = a.catch(0)),
                                console.log(a.t0),
                                (c = a.t0.response.data.errors) &&
                                  c.forEach(function (e) {
                                    return n(W(e.msg, "danger"));
                                  }),
                                n({
                                  type: E,
                                  payload: {
                                    msg: a.t0.response.statusText,
                                    status: a.t0.response.status,
                                  },
                                });
                            case 15:
                            case "end":
                              return a.stop();
                          }
                      },
                      a,
                      null,
                      [[0, 9]]
                    );
                  })
                );
                return function (e) {
                  return a.apply(this, arguments);
                };
              })();
            },
          }
        )(function (e) {
          var t = e.createSellerReview,
            a = e.profile.profile,
            r = e.auth,
            i = r.user,
            c = (i._id, i.name),
            l = (i.avatar, r.isAuthenticated),
            o = r.loading,
            d = e.history,
            j = Object(n.useState)(0),
            u = Object(V.a)(j, 2),
            b = u[0],
            p = u[1],
            x = Object(n.useState)(""),
            h = Object(V.a)(x, 2),
            O = h[0],
            f = h[1];
          return Object(_.jsx)("div", {
            style: {
              background: "white",
              color: "black",
              padding: "10px",
              borderRadius: "10px",
              margin: "10px",
            },
            children: Object(_.jsxs)(n.Fragment, {
              children: [
                0 === a.reviews.length &&
                  Object(_.jsx)("h4", { children: "No Reviews" }),
                Object(_.jsxs)("div", {
                  className: "profile-edu bg-white p-2",
                  children: [
                    Object(_.jsx)("h2", {
                      className: "text-primary",
                      children: "Reviews",
                    }),
                    a.reviews.map(function (e) {
                      return Object(_.jsxs)(
                        "div",
                        {
                          children: [
                            Object(_.jsxs)("div", {
                              style: { display: "flex" },
                              children: [
                                Object(_.jsx)("h3", { children: e.name }),
                                "(",
                                Object(_.jsx)(ve, { value: e.rating }),
                                ")",
                              ],
                            }),
                            Object(_.jsx)("p", {
                              class: "small",
                              children: e.createdAt.substring(0, 10),
                            }),
                            Object(_.jsx)("p", { children: e.comment }),
                          ],
                        },
                        e._id
                      );
                    }),
                    Object(_.jsxs)("div", {
                      children: [
                        Object(_.jsx)("h2", {
                          className: "text-dark text-primary",
                          children: "Write a Customer Review",
                        }),
                        l && !1 === o
                          ? Object(_.jsxs)("form", {
                              class: "form",
                              onSubmit: function (e) {
                                e.preventDefault(),
                                  t(
                                    a.user._id,
                                    { name: c, rating: b, comment: O },
                                    d
                                  ),
                                  window.location.reload();
                              },
                              children: [
                                Object(_.jsxs)("div", {
                                  class: "form-group",
                                  children: [
                                    Object(_.jsx)("div", {
                                      className: "form-text",
                                      children: "* Rating",
                                    }),
                                    Object(_.jsxs)("select", {
                                      value: b,
                                      onChange: function (e) {
                                        return p(e.target.value);
                                      },
                                      children: [
                                        Object(_.jsx)("option", {
                                          value: "",
                                          children: "Select...",
                                        }),
                                        Object(_.jsx)("option", {
                                          value: "1",
                                          children: "1 - Poor",
                                        }),
                                        Object(_.jsx)("option", {
                                          value: "2",
                                          children: "2 - Fair",
                                        }),
                                        Object(_.jsx)("option", {
                                          value: "3",
                                          children: "3 - Good",
                                        }),
                                        Object(_.jsx)("option", {
                                          value: "4",
                                          children: "4 - Very Good",
                                        }),
                                        Object(_.jsx)("option", {
                                          value: "5",
                                          children: "5 - Excellent",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                Object(_.jsxs)("div", {
                                  class: "form-group",
                                  children: [
                                    Object(_.jsx)("div", {
                                      className: "form-text",
                                      children: "* Comment",
                                    }),
                                    Object(_.jsx)("textarea", {
                                      row: "3",
                                      value: O,
                                      onChange: function (e) {
                                        return f(e.target.value);
                                      },
                                    }),
                                  ],
                                }),
                                Object(_.jsx)("input", {
                                  type: "submit",
                                  className: "btn btn-primary my-1",
                                }),
                              ],
                            })
                          : Object(_.jsxs)("p", {
                              children: [
                                "Please ",
                                Object(_.jsx)(s.b, {
                                  to: "/login",
                                  children: "sign in",
                                }),
                                " to write a review",
                                " ",
                              ],
                            }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }),
        Ce = Object(o.b)(
          function (e) {
            return { profile: e.profile, auth: e.auth };
          },
          {
            getProfileById: function (e) {
              return (function () {
                var t = Object(u.a)(
                  j.a.mark(function t(a) {
                    var n;
                    return j.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                a({ type: D }),
                                (t.next = 4),
                                p.a.get("/api/profile/user/".concat(e))
                              );
                            case 4:
                              (n = t.sent),
                                a({ type: w, payload: n.data }),
                                (t.next = 11);
                              break;
                            case 8:
                              (t.prev = 8),
                                (t.t0 = t.catch(0)),
                                a({
                                  type: E,
                                  payload: {
                                    msg: t.t0.response.statusText,
                                    status: t.t0.response.status,
                                  },
                                });
                            case 11:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 8]]
                    );
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })();
            },
          }
        )(function (e) {
          var t = e.getProfileById,
            a = e.profile,
            r = a.profile,
            i = a.loading,
            c = e.auth,
            l = e.match;
          return (
            Object(n.useEffect)(function () {
              t(l.params.id);
            }, []),
            null === localStorage.getItem("token") ||
            void 0 === localStorage.getItem("token") ||
            "" === localStorage.getItem("token")
              ? Object(_.jsxs)("div", {
                  style: { textAlign: "center", height: "400px" },
                  children: [
                    Object(_.jsx)("h3", {
                      style: { textAlign: "center", marginBottom: "20px" },
                      children: "Please login to see full profile",
                    }),
                    Object(_.jsx)(s.b, {
                      to: "/login",
                      style: { border: "1px solid orange", padding: "10px" },
                      children: "Go To Login",
                    }),
                  ],
                })
              : Object(_.jsx)(n.Fragment, {
                  children:
                    null === r || i
                      ? Object(_.jsx)(je, {})
                      : Object(_.jsxs)(n.Fragment, {
                          children: [
                            Object(_.jsx)(s.b, {
                              to: "/profiles",
                              className: "btn btn-light",
                              style: { margin: "10px" },
                              children: "Back To Profiles",
                            }),
                            c.isAuthenticated &&
                              !1 === c.loading &&
                              c.user._id === r.user._id &&
                              Object(_.jsx)(s.b, {
                                to: "/edit-profile",
                                className: "btn btn-dark",
                                style: { margin: "10px" },
                                children: "Edit Profile",
                              }),
                            Object(_.jsxs)("div", {
                              children: [
                                Object(_.jsx)(we, { profile: r }),
                                Object(_.jsxs)("div", {
                                  style: {
                                    background: "white",
                                    color: "black",
                                    padding: "10px",
                                    borderRadius: "10px",
                                    margin: "10px",
                                  },
                                  children: [
                                    Object(_.jsx)("h2", {
                                      className: "text-primary",
                                      children: "Formal Training",
                                    }),
                                    r.education.length > 0
                                      ? Object(_.jsx)(n.Fragment, {
                                          children: r.education.map(function (
                                            e
                                          ) {
                                            return Object(_.jsx)(
                                              Se,
                                              { education: e },
                                              e._id
                                            );
                                          }),
                                        })
                                      : Object(_.jsx)("h4", {
                                          children: "No training information.",
                                        }),
                                  ],
                                }),
                                Object(_.jsx)(Ae, { profile: r }),
                              ],
                            }),
                          ],
                        }),
                })
          );
        }),
        Ee = Object(o.b)(
          function (e) {
            return { auth: e.auth, profile: e.profile };
          },
          { getCurrentProfile: se, deleteAccount: oe }
        )(function (e) {
          var t = e.getCurrentProfile,
            a = (e.deleteAccount, e.auth.user),
            r = e.profile,
            i = r.profile,
            c = r.loading;
          return (
            Object(n.useEffect)(
              function () {
                t();
              },
              [t]
            ),
            c && null === i
              ? Object(_.jsx)(je, {})
              : Object(_.jsxs)(n.Fragment, {
                  children: [
                    Object(_.jsx)("h1", {
                      className: "large text-primary",
                      children: "My Profile",
                    }),
                    Object(_.jsxs)("p", {
                      className: "lead",
                      children: [
                        Object(_.jsx)("i", { className: "fas fa-user" }),
                        " Welcome ",
                        a && a.name,
                      ],
                    }),
                    null !== i
                      ? Object(_.jsx)(n.Fragment, {
                          children: Object(_.jsx)(l.a, { to: "/edit-profile" }),
                        })
                      : Object(_.jsx)(n.Fragment, {
                          children: Object(_.jsx)(l.a, {
                            to: "/create-profile",
                          }),
                        }),
                  ],
                })
          );
        }),
        Ie = a.p + "static/media/india.71bec4a9.png";
      var Pe = function (e) {
          return Object(_.jsxs)("div", {
            className: "about-section",
            style: { margin: "50px auto" },
            children: [
              Object(_.jsx)("div", {
                style: {
                  width: "auto",
                  textAlign: "center",
                  fontSize: "1.5rem",
                  margin: "30px",
                },
                children: Object(_.jsxs)("p", {
                  children: [
                    '" Our Mission is engage large number of professional service providers with us and empower them by delivering services at home in a touch "',
                    " ",
                  ],
                }),
              }),
              Object(_.jsxs)("div", {
                className: "about-header",
                style: { textAlign: "center" },
                children: [
                  Object(_.jsxs)("div", {
                    className: "heading",
                    children: [
                      Object(_.jsx)("h2", {
                        style: { fontSize: "3rem", fontWeight: "bolder" },
                        children: "About Us",
                      }),
                      Object(_.jsx)("h3", {
                        style: {
                          fontSize: "2rem",
                          padding: "20px",
                          fontWeight: "bold",
                        },
                        children: "Who we are",
                      }),
                    ],
                  }),
                  Object(_.jsx)("div", {
                    className: "about-desc",
                    style: {
                      fontSize: "1.2rem",
                      padding: "20px",
                      textAlign: "left",
                    },
                    children: Object(_.jsx)("p", {
                      children:
                        "Our aim to provide a plaform for oneline home services. Today operates in different cities of the country including Pune , Indore , Mumbai , Banglore .The Household ServiceProvider.com platform helps customers to book high quality and relaible services-beauty treatment,massages,haircut,home sevices like electrician , plumber and more. delivered by trained professionals . Also this platform provide different types of service provider a platform where they can register and sell their service anf get customer online.",
                    }),
                  }),
                ],
              }),
              Object(_.jsxs)("div", {
                className: "about-mid",
                style: { margin: "50px auto", textAlign: "center" },
                children: [
                  Object(_.jsx)("div", {
                    className: "heading",
                    children: Object(_.jsx)("h2", {
                      style: { fontSize: "2rem", padding: "20px" },
                      children: "How We Do It",
                    }),
                  }),
                  Object(_.jsx)("div", {
                    className: "mid-desc",
                    style: {
                      padding: "20px",
                      fontSize: "1.2rem",
                      textAlign: "left",
                    },
                    children: Object(_.jsx)("p", {
                      children:
                        "Household ServiceProvider.com provides a platform over the web on which various skilled and professional service providers connects with the users who are looking for specific service. and then the user is able to book the service which is closest according to requirement",
                    }),
                  }),
                ],
              }),
              Object(_.jsxs)("div", {
                className: "loc",
                style: { margin: "50px auto" },
                children: [
                  Object(_.jsx)("div", {
                    style: { margin: "20px", textAlign: "center" },
                    children: Object(_.jsx)("img", {
                      src: Ie,
                      style: { width: "30rem", height: "30rem" },
                    }),
                  }),
                  Object(_.jsx)("divv", {
                    style: {
                      padding: "20px",
                      fontSize: "1.2rem",
                      textAlign: "center",
                    },
                    children: Object(_.jsx)("p", {
                      children:
                        "We are currently working in Pune,Mumbai,Banglore,Indore",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        Re = a(28),
        Te = Object(o.b)(function (e) {
          return { auth: e.auth };
        })(function (e) {
          var t = e.component,
            a = e.auth,
            n = a.isAuthenticated,
            r = a.loading,
            i = Object(Re.a)(e, ["component", "auth"]);
          return Object(_.jsx)(
            l.b,
            Object(ae.a)(
              Object(ae.a)({}, i),
              {},
              {
                render: function (e) {
                  return n || r
                    ? Object(_.jsx)(t, Object(ae.a)({}, e))
                    : Object(_.jsx)(l.a, { to: "/login" });
                },
              }
            )
          );
        }),
        De = function (e) {
          var t = e.component,
            a = Object(Re.a)(e, ["component"]),
            n = z();
          return Object(_.jsx)(
            l.b,
            Object(ae.a)(
              Object(ae.a)({}, a),
              {},
              {
                render: function (e) {
                  return n
                    ? Object(_.jsx)(t, Object(ae.a)({}, e))
                    : Object(_.jsx)(l.a, { to: "/profiles" });
                },
              }
            )
          );
        },
        We = a(62),
        Fe = a.n(We),
        Be = function (e) {
          var t,
            a,
            r = e.profileId,
            i = e.refreshFunction,
            c = Object(n.useState)(!1),
            s = Object(V.a)(c, 2),
            l = s[0],
            o = s[1],
            d = Object(n.useState)(null),
            b = Object(V.a)(d, 2),
            x = b[0],
            h = b[1],
            O = Object(n.useState)(!0),
            f = Object(V.a)(O, 2),
            m = f[0],
            g = f[1],
            v = (function () {
              var e = Object(u.a)(
                j.a.mark(function e(t) {
                  return j.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              o(!0),
                              (e.prev = 1),
                              (e.next = 4),
                              p.a.post("api/profile/admin/user", {
                                userId: r,
                                verificationStatus: t,
                              })
                            );
                          case 4:
                            y(), i(), (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(1)),
                              console.log(e.t0);
                          case 11:
                            o(!1);
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 8]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          function y() {
            return N.apply(this, arguments);
          }
          function N() {
            return (N = Object(u.a)(
              j.a.mark(function e() {
                var t;
                return j.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            o(!0),
                            (e.prev = 1),
                            (e.next = 4),
                            p.a.get("api/profile/admin/user/" + r)
                          );
                        case 4:
                          (t = e.sent), h(t.data), (e.next = 11);
                          break;
                        case 8:
                          (e.prev = 8),
                            (e.t0 = e.catch(1)),
                            401 === e.t0.status && console.log("redirect");
                        case 11:
                          o(!1);
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 8]]
                );
              })
            )).apply(this, arguments);
          }
          return (
            Object(n.useEffect)(function () {
              y();
            }, []),
            Object(_.jsx)("div", {
              style: { color: "white", background: "#333", padding: "10px" },
              children: l
                ? Object(_.jsx)(je, {})
                : x &&
                  Object(_.jsxs)("div", {
                    children: [
                      Object(_.jsxs)("div", {
                        className: "text-center",
                        children: [
                          " ",
                          Object(_.jsx)("img", {
                            class: "round-img avatar-img my-1",
                            src: null === x || void 0 === x ? void 0 : x.image,
                            alt: "profile-image",
                          }),
                        ],
                      }),
                      Object(_.jsxs)("form", {
                        className: "form",
                        children: [
                          Object(_.jsxs)("div", {
                            className: "form-group",
                            children: [
                              Object(_.jsx)("div", {
                                className: "form-group",
                                children: Object(_.jsxs)("select", {
                                  name: "skills",
                                  value: x.skills,
                                  children: [
                                    Object(_.jsx)("option", {
                                      value: "0",
                                      children:
                                        "* Select the Service you want to provide.",
                                    }),
                                    Object(_.jsx)("option", {
                                      value: "Baby sitting",
                                      children: "Baby sitting",
                                    }),
                                    Object(_.jsx)("option", {
                                      value: "Plumbing",
                                      children: "Plumbing",
                                    }),
                                    Object(_.jsx)("option", {
                                      value: "House Keeping",
                                      children: "House Keeping",
                                    }),
                                    Object(_.jsx)("option", {
                                      value: "Tutoring",
                                      children: "Tutoring",
                                    }),
                                    Object(_.jsx)("option", {
                                      value: "Electrical Services",
                                      children: "Electrical Services",
                                    }),
                                    Object(_.jsx)("option", {
                                      value: "Moving and delivery",
                                      children: "Moving and delivery",
                                    }),
                                    Object(_.jsx)("option", {
                                      value: "Personal Care",
                                      children:
                                        "Personal Care(like haicut, manicure)",
                                    }),
                                    Object(_.jsx)("option", {
                                      value: "Catering Services",
                                      children: "Catering Services",
                                    }),
                                    Object(_.jsx)("option", {
                                      value: "Other",
                                      children: "Other",
                                    }),
                                  ],
                                }),
                              }),
                              Object(_.jsx)("div", {
                                children: "Special skills",
                              }),
                              Object(_.jsx)(ye, {
                                locationArray: x.skillArray,
                              }),
                              Object(_.jsxs)("div", {
                                className: "form-group",
                                children: [
                                  Object(_.jsx)("div", {
                                    className: "form-text",
                                    children: "*Price you wanna ask(per hour).",
                                  }),
                                  Object(_.jsx)("input", {
                                    type: "text",
                                    name: "price",
                                    value: x.price,
                                  }),
                                ],
                              }),
                              Object(_.jsxs)("div", {
                                className: "form-group",
                                children: [
                                  Object(_.jsx)("div", {
                                    className: "form-text",
                                    children:
                                      "*Service Location (eg. Indore, Pune, Bangalore etc)",
                                  }),
                                  Object(_.jsxs)("select", {
                                    name: "location",
                                    value: x.location,
                                    children: [
                                      Object(_.jsx)("option", {
                                        value: "Indore",
                                        children: "Indore",
                                      }),
                                      Object(_.jsx)("option", {
                                        value: "Pune",
                                        children: "Pune",
                                      }),
                                      Object(_.jsx)("option", {
                                        value: "Bangalore",
                                        children: "Bangalore",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              Object(_.jsx)(ye, {
                                locationArray: x.locationArray,
                              }),
                              Object(_.jsxs)("div", {
                                className: "form-group",
                                children: [
                                  Object(_.jsx)("div", {
                                    className: "form-text",
                                    children:
                                      "A brief description of yours services",
                                  }),
                                  Object(_.jsx)("textarea", {
                                    name: "bio",
                                    value: x.bio,
                                    cols: "30",
                                    rows: "5",
                                  }),
                                ],
                              }),
                              Object(_.jsx)(Oe, {
                                title: "Addhar Card",
                                imageSrc:
                                  null === x || void 0 === x
                                    ? void 0
                                    : x.addharImage,
                              }),
                              Object(_.jsx)("br", {}),
                              Object(_.jsx)(Oe, {
                                title: "Police Verification Documents",
                                imageSrc:
                                  null === x || void 0 === x
                                    ? void 0
                                    : x.policeVerificationImage,
                              }),
                              Object(_.jsx)("div", {
                                className: "my-2",
                                children: Object(_.jsxs)("button", {
                                  onClick: function () {
                                    return g(!m);
                                  },
                                  type: "button",
                                  className: "btn btn-light",
                                  children: [
                                    Object(_.jsx)("i", {
                                      className: "fas fa-pen text-primary",
                                    }),
                                    " Contact Details",
                                  ],
                                }),
                              }),
                              m &&
                                Object(_.jsxs)(n.Fragment, {
                                  children: [
                                    Object(_.jsxs)("div", {
                                      className: "form-group contact-input",
                                      children: [
                                        Object(_.jsx)("i", {
                                          className: "fas fa-phone fa-2x",
                                        }),
                                        Object(_.jsx)("input", {
                                          type: "text",
                                          placeholder: "Phone Number",
                                          name: "phone",
                                          value:
                                            null === x ||
                                            void 0 === x ||
                                            null === (t = x.info) ||
                                            void 0 === t
                                              ? void 0
                                              : t.phone,
                                        }),
                                      ],
                                    }),
                                    Object(_.jsxs)("div", {
                                      className: "form-group contact-input",
                                      children: [
                                        Object(_.jsx)("i", {
                                          className: "far fa-envelope fa-2x",
                                        }),
                                        Object(_.jsx)("input", {
                                          type: "text",
                                          placeholder: "Email ID",
                                          name: "email",
                                          value:
                                            null === x ||
                                            void 0 === x ||
                                            null === (a = x.info) ||
                                            void 0 === a
                                              ? void 0
                                              : a.email,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              Object(_.jsx)(he, {
                                education: x.education,
                                action: !1,
                              }),
                            ],
                          }),
                          "PENDING" === x.verificationStatus &&
                            Object(_.jsxs)(_.Fragment, {
                              children: [
                                Object(_.jsx)("button", {
                                  onClick: function () {
                                    v("VERIFIED");
                                  },
                                  style: {
                                    margin: "10px",
                                    padding: "10px",
                                    border: "10px",
                                    borderRadius: "50px",
                                    background: "green",
                                    color: "white",
                                    fontWeight: 700,
                                  },
                                  children: "Verify Profile",
                                }),
                                Object(_.jsx)("button", {
                                  onClick: function () {
                                    v("REJECTED");
                                  },
                                  style: {
                                    margin: "10px",
                                    padding: "10px",
                                    border: "10px",
                                    borderRadius: "50px",
                                    background: "yellow",
                                    color: "black",
                                    fontWeight: 700,
                                  },
                                  children: "Reject Profile",
                                }),
                              ],
                            }),
                          "VERIFIED" === x.verificationStatus &&
                            Object(_.jsxs)(_.Fragment, {
                              children: [
                                Object(_.jsx)("button", {
                                  onClick: function () {
                                    v("PENDING");
                                  },
                                  style: {
                                    margin: "10px",
                                    padding: "10px",
                                    border: "10px",
                                    borderRadius: "50px",
                                    background: "green",
                                    color: "white",
                                    fontWeight: 700,
                                  },
                                  children: "Pending Profile",
                                }),
                                Object(_.jsx)("button", {
                                  onClick: function () {
                                    v("REJECTED");
                                  },
                                  style: {
                                    margin: "10px",
                                    padding: "10px",
                                    border: "10px",
                                    borderRadius: "50px",
                                    background: "yellow",
                                    color: "black",
                                    fontWeight: 700,
                                  },
                                  children: "Reject Profile",
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
            })
          );
        },
        Le = function () {
          var e = Object(n.useState)("PENDING"),
            t = Object(V.a)(e, 2),
            a = t[0],
            r = t[1],
            i = Object(n.useState)(!1),
            c = Object(V.a)(i, 2),
            s = c[0],
            l = c[1],
            o = Object(n.useState)([]),
            d = Object(V.a)(o, 2),
            b = d[0],
            x = d[1],
            h = Object(n.useState)(!1),
            O = Object(V.a)(h, 2),
            f = O[0],
            m = O[1],
            g = Object(n.useState)(null),
            v = Object(V.a)(g, 2),
            y = v[0],
            N = v[1];
          function k() {
            return w.apply(this, arguments);
          }
          function w() {
            return (w = Object(u.a)(
              j.a.mark(function e() {
                var t;
                return j.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            l(!0),
                            (e.prev = 1),
                            (e.next = 4),
                            p.a.get(
                              "/api/profile?verificationStatus=".concat(a)
                            )
                          );
                        case 4:
                          (t = e.sent), x(t.data), (e.next = 11);
                          break;
                        case 8:
                          (e.prev = 8),
                            (e.t0 = e.catch(1)),
                            401 === e.t0.status && console.log("redirect");
                        case 11:
                          l(!1);
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 8]]
                );
              })
            )).apply(this, arguments);
          }
          return (
            Object(n.useEffect)(
              function () {
                k();
              },
              [a]
            ),
            Object(_.jsxs)("div", {
              children: [
                Object(_.jsxs)("div", {
                  style: {
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    margin: "10px",
                  },
                  children: [
                    Object(_.jsx)("div", {
                      style: { fontSize: "35px", fontWeight: "bold" },
                      children: "Verification Status\xa0\xa0\xa0",
                    }),
                    Object(_.jsxs)("select", {
                      style: { fontSize: "15px", padding: "10px" },
                      name: "location",
                      value: a,
                      onChange: function (e) {
                        return r(e.target.value);
                      },
                      children: [
                        Object(_.jsx)("option", {
                          value: "ALL",
                          children: "ALL",
                        }),
                        Object(_.jsx)("option", {
                          value: "VERIFIED",
                          children: "VERIFIED",
                        }),
                        Object(_.jsx)("option", {
                          value: "PENDING",
                          children: "PENDING",
                        }),
                        Object(_.jsx)("option", {
                          value: "REJECTED",
                          children: "REJECTED",
                        }),
                      ],
                    }),
                  ],
                }),
                Object(_.jsx)("div", {
                  style: { display: "flex", flexWrap: "wrap" },
                  children: s
                    ? Object(_.jsx)(je, {})
                    : 0 === b.length
                    ? Object(_.jsx)("div", { children: "No Profile found" })
                    : b.map(function (e) {
                        return Object(_.jsx)(Ne, {
                          profile: e,
                          actionOnCardClick: function () {
                            N(e.user._id), m(!0);
                          },
                          showLink: !1,
                        });
                      }),
                }),
                Object(_.jsx)(Fe.a, {
                  isOpen: f,
                  onRequestClose: function () {
                    m(!1);
                  },
                  children: Object(_.jsx)(Be, {
                    profileId: y,
                    refreshFunction: k,
                  }),
                }),
              ],
            })
          );
        },
        ze = function () {
          return Object(_.jsxs)("section", {
            className: "container",
            children: [
              Object(_.jsx)(ie, {}),
              Object(_.jsxs)(l.d, {
                children: [
                  Object(_.jsx)(l.b, {
                    exact: !0,
                    path: "/register",
                    component: ne,
                  }),
                  Object(_.jsx)(l.b, {
                    exact: !0,
                    path: "/login",
                    component: re,
                  }),
                  Object(_.jsx)(l.b, {
                    exact: !0,
                    path: "/decision",
                    component: ue,
                  }),
                  Object(_.jsx)(l.b, {
                    exact: !0,
                    path: "/profiles",
                    component: ke,
                  }),
                  Object(_.jsx)(l.b, {
                    path: "/search/:keyword/:city",
                    component: ke,
                  }),
                  Object(_.jsx)(l.b, {
                    path: "/search/:keyword",
                    component: ke,
                  }),
                  Object(_.jsx)(l.b, {
                    exact: !0,
                    path: "/profile/:id",
                    component: Ce,
                  }),
                  Object(_.jsx)(l.b, {
                    exact: !0,
                    path: "/about",
                    component: Pe,
                  }),
                  Object(_.jsx)(Te, {
                    exact: !0,
                    path: "/dashboard",
                    component: Ee,
                  }),
                  Object(_.jsx)(Te, {
                    exact: !0,
                    path: "/create-profile",
                    component: xe,
                  }),
                  Object(_.jsx)(Te, {
                    exact: !0,
                    path: "/edit-profile",
                    component: fe,
                  }),
                  Object(_.jsx)(Te, {
                    exact: !0,
                    path: "/add-education",
                    component: me,
                  }),
                  Object(_.jsx)(De, {
                    exact: !0,
                    path: "/admin",
                    component: Le,
                  }),
                  Object(_.jsx)(l.b, { component: ce }),
                ],
              }),
            ],
          });
        },
        _e = a(20),
        Me = a(63),
        Ve = a(64),
        Ke = a(66),
        Ge = [];
      var He = {
        token: localStorage.getItem("token"),
        isAuthenticated: null,
        loading: !0,
        user: {
          isSeller: !0,
          _id: null,
          name: null,
          email: null,
          avatar: null,
          date: "",
        },
      };
      var qe = { profile: null, profiles: [], loading: !0, error: {} };
      var Ue = Object(_e.combineReducers)({
          alert: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Ge,
              t = arguments.length > 1 ? arguments[1] : void 0,
              a = t.type,
              n = t.payload;
            switch (a) {
              case h:
                return [].concat(Object(Ke.a)(e), [n]);
              case O:
                return e.filter(function (e) {
                  return e.id !== n;
                });
              default:
                return e;
            }
          },
          auth: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : He,
              t = arguments.length > 1 ? arguments[1] : void 0,
              a = t.type,
              n = t.payload;
            switch (a) {
              case g:
                return Object(ae.a)(
                  Object(ae.a)({}, e),
                  {},
                  { isAuthenticated: !0, loading: !1, user: n }
                );
              case f:
              case y:
                return (
                  localStorage.setItem("token", n.token),
                  Object(ae.a)(
                    Object(ae.a)(Object(ae.a)({}, e), n),
                    {},
                    { isAuthenticated: !0, loading: !1 }
                  )
                );
              case m:
              case v:
              case N:
              case k:
              case I:
                return Object(ae.a)(
                  Object(ae.a)({}, e),
                  {},
                  { token: null, isAuthenticated: !1, loading: !1 }
                );
              default:
                return e;
            }
          },
          profile: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : qe,
              t = arguments.length > 1 ? arguments[1] : void 0,
              a = t.type,
              n = t.payload;
            switch (a) {
              case D:
                return Object(ae.a)(Object(ae.a)({}, e), {}, { loading: !0 });
              case w:
              case A:
                return Object(ae.a)(
                  Object(ae.a)({}, e),
                  {},
                  { profile: n, loading: !1 }
                );
              case S:
                return Object(ae.a)(
                  Object(ae.a)({}, e),
                  {},
                  { profiles: n, loading: !1 }
                );
              case E:
                return Object(ae.a)(
                  Object(ae.a)({}, e),
                  {},
                  { error: n, loading: !1, profile: null }
                );
              case C:
              case k:
                return Object(ae.a)(Object(ae.a)({}, e), {}, { profile: null });
              case P:
                return { loading: !1, success: !0 };
              case R:
                return { error: n, loading: !1 };
              case T:
                return {};
              default:
                return e;
            }
          },
        }),
        Je = [Ve.a],
        Ye = Object(_e.createStore)(
          Ue,
          {},
          Object(Me.composeWithDevTools)(_e.applyMiddleware.apply(void 0, Je))
        );
      localStorage.token && F(localStorage.token);
      var Qe = function () {
        return (
          Object(n.useEffect)(function () {
            Ye.dispatch(B());
          }, []),
          Object(_.jsx)(o.a, {
            store: Ye,
            children: Object(_.jsx)(s.a, {
              children: Object(_.jsxs)("div", {
                className: "outer-container",
                children: [
                  Object(_.jsx)(M, {}),
                  Object(_.jsxs)(l.d, {
                    children: [
                      Object(_.jsx)(l.b, {
                        exact: !0,
                        path: "/",
                        component: ee,
                      }),
                      Object(_.jsx)(l.b, { component: ze }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      };
      c.a.render(
        Object(_.jsx)(r.a.StrictMode, { children: Object(_.jsx)(Qe, {}) }),
        document.getElementById("root")
      );
    },
    71: function (e, t, a) {},
    72: function (e, t, a) {},
  },
  [[106, 1, 2]],
]);
//# sourceMappingURL=main.39f237b9.chunk.js.map
