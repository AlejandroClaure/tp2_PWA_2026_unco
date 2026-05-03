import { useEffect, useState } from "react";
import { FaTimes, FaUser } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function NosotrosModal({ isOpen, onClose }) {
  const [isClosing, setIsClosing] = useState(false);
  const { t } = useTranslation();

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 180);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  if (!isOpen && !isClosing) return null;

  const team = [
    {
      name: "Alejandro Claure",
      email: "alejandroclaure01@gmail.com",
      role: t("pmScrum"),
    },
    {
      name: "Gaston Llaupe",
      email: "llaupeg@gmail.com",
      role: t("developer"),
    },
    {
      name: "Joaquin Ignacio",
      email: "Joaquinivl95@gmail.com",
      role: t("developer"),
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        onClick={handleClose}
        className={`
          absolute inset-0 bg-black/70
          transition-opacity duration-200
          ${isClosing ? "opacity-0" : "opacity-100"}
        `}
      />

      <div
        className={`
          relative w-full max-w-md p-5 rounded-xl
          bg-[#1b2838] border border-[#2a475e] shadow-2xl text-[#c7d5e0]
          transform-gpu transition-all duration-200 ease-out
          ${isClosing ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}
        `}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[#66c0f4] text-lg font-semibold">
            {t("teamTitle")}
          </h2>

          <button
            onClick={handleClose}
            className="hover:text-white transition-colors duration-150"
          >
            <FaTimes />
          </button>
        </div>

        <div className="space-y-2">
          {team.map((member, i) => (
            <div
              key={i}
              className="
                flex items-start gap-3 p-3 rounded-lg
                bg-[#2a475e]
                hover:bg-[#1f3a4d]
                transition-colors duration-100
              "
            >
              <div className="text-[#66c0f4] mt-1 opacity-90">
                <FaUser />
              </div>

              <div>
                <p className="font-medium leading-tight">{member.name}</p>

                <p className="text-xs text-[#8f98a0]">{member.role}</p>

                <a
                  href={`mailto:${member.email}`}
                  className="
                    text-xs text-[#66c0f4]
                    hover:text-[#a4d4f5]
                    transition-colors duration-150
                  "
                >
                  {member.email}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-[#8f98a0] mt-4 text-center">
          {t("thanksUsing")}
        </p>
      </div>
    </div>
  );
}

export { NosotrosModal };
