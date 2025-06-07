import { useCallback, useMemo } from "react"
import { LuCopy } from "react-icons/lu"
import Profile from "./Profile"

export default function MainAbout() {
  const profile = useMemo(() => ({ email: "dexteryoon@icloud.com", mobile: "01075910173", github: "https://github.com/yoonbeeseo" }), [])
  const copy = useCallback((text: string) => navigator.clipboard.writeText(text), [])

  type Data = { value: string; label: string }
  const data = useMemo<Data[]>(
    () => [
      { value: profile.email, label: "이메일" },
      { value: profile.mobile, label: "연락처" },
      { value: profile.github, label: "Github" },
    ],
    [profile]
  )
  return (
    <div className="py-5 gap-5 lg:flex-row max lg:justify-center min-h-[calc(100vh-61px)] items-center lg:px-4">
      <div className="gap-5 items-center order-2 lg:order-0 lg:items-start flex-1 max-w-100 sm:max-w-125 lg:max-w-full">
        <h1 className="h1 text-4xl text-primary">
          Dexter Yoon <span className="text-lg font-medium">윤덕현</span>
        </h1>
        <ul className="lg:flex-row lg:gap-2">
          {data.map((item, i) => (
            <li key={i}>
              <div className="li-wrap">
                <label htmlFor={item.label}>{item.label}</label>
                <button
                  id={item.label}
                  onClick={() => {
                    copy(item.value)
                    alert(`${item.label}을(를) 복사했습니다.`)
                    const a = document.createElement("a")
                    a.href = i === 0 ? `mailto:${item.value}?bcc=${item.value}` : i === 1 ? `tel:${item.value}` : item.value
                    if (confirm(i === 0 ? "이메일을 쓰시겠습니까?" : i === 1 ? "전화를 거시겠습니까?" : "Github로 이동하시겠습니까?")) {
                      if (i === 2) {
                        a.target = "_blank"
                      }
                      a.click()
                    }
                  }}
                  className="dark:text-zinc-400 hover:text-primary"
                >
                  {item.value} <LuCopy />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-xl leading-10 font-light selection:bg-primary selection:text-white dark:text-zinc-400">{text}</p>
      </div>
      <Profile />
    </div>
  )
}

const text = `주어진 과제를 꼭 해내야 직성이 풀리는 집요한 개발자 윤덕현입니다. 때로는 타협없는 고집, 끈질긴 집요함, 불편한 것을 어떻게 해서든 개선하려고 하는 자세로 똘똘 뭉친 개발자입니다.`
