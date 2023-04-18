import React, { useState } from 'react';
import './App.scss';
import { useForm } from "react-hook-form";
import clsx from "clsx"
import {
  Input,
  Radio,
  Select,
  CheckBox
} from "./ui"

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const forms = window.formsObject


function App() {
  const { register, handleSubmit, formState: { errors} } = useForm();
  const [steps, setSteps] = useState(3)
  const [data, setData] = useState<{[index:string]: string}| undefined>(undefined)

  console.log(data);
  console.log(steps);

  return (
    <>
      <div className='flex titleArea items-center'>
      <p className='title'>STEP</p>
      <ol className='flex gap-3'>
        {[...Array(forms[0].length)].map((_, i) => {
          return <li
            key={`key-${i}`}
            className={clsx("flex justify-center items-center rounded-full text-white font-bold text-sm", {
            "-active": i === (steps - 1)
          })}
          >
            {`${i + 1}`}
          </li>
        })}
      </ol>
      </div>
      <form onSubmit={handleSubmit((data) => {
          console.log(data);
          setData((prevData) => ({
            ...prevData,
            ...data
          }))
          if(forms.length >= steps) {
            setSteps((prev) => ++prev)
          } else {
            console.log("submit")
          }
        })}>
        <div className='flex flex-wrap gap-5 form-wrap justify-between'>
          {forms.filter((_,i) => (i + 1)  === steps )
          ?.flat()
          ?.map((_, i) => {
            const pattern = _.validation === "email"
              ? {
                value : emailRegex,
                message: "メールアドレスが正しくありません"
              }
              : undefined
              const required = _.required
              ? {
                value: true,
                message: "必須項目です"
              }
              : undefined
            const name = _.name ?? Math.random().toString(32).substring(2)


            return <div
              key={`${i}-${name}`}
              className={clsx({
                "w-full": _.size !== "half",
              })}
              style={{
                width: _.size === "half"
                  ? 'calc(50% - 0.4rem)'
                  : undefined
              }}
            >
              {/* select */}
              {_.type === "select"
                ? <>
                  <label >{_.label}</label>
                  <Select
                    registration={register(
                      name,
                      {
                        required,
                      }
                    )}
                    options={_.options}
                  />
                </>
              : _.type === "checkbox"
                // checkbox
                ? <CheckBox
                  title={_.title}
                  options={_.options}
                  registration={register(
                    name,
                    {
                      required,
                    }
                  )}
                />
                : _.type === "radio"
                // radio
                ? <Radio
                  title={_.title}
                  registration={register(
                    name,
                    {
                      required
                    }
                  )}
                  options={_.options}
                />
                : _.link != null
                ? <div className='text-center'>
                  <a
                    href={_.link.href}
                    className='underline hover:no-underline'
                  >
                    {_.link.text}
                  </a>
                </div>
                // input
                : <>
                  <label >{_.label}</label>
                  <Input
                    type={_.type as string}
                    registration={register(
                      name,
                      {
                        required,
                        pattern
                      }
                    )}
                    placeholder={_.placeholder}
                  />
                </>
              }


              {errors[name] &&
                <p className='mt-1 text-red-600 font-bold text-sm'>
                  {`${errors[name]?.message ?? "バリデーションエラーです"}`}
                </p>
              }
              </div>
          })
          }
        </div>
        <div className="mt-4 flex justify-center ">
          <button
            className='border flex w-full justify-center h-12 font-bold items-center rounded-lg transition-all easi-in duration-300 hover:opacity-80 submit-button'
          >
            { forms.length > steps
            ? "次へ"
            : window.submitText
            }

          </button>
        </div>
      </form>
    </>
  );
}

export default App;
