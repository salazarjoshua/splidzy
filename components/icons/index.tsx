import * as React from "react";
import { cn } from "@/lib/utils";

export const Star: React.FC<React.SVGProps<SVGElement>> = ({
  className,
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 48 48"
    className={cn("w-12", className)}
  >
    <path
      fill="#FFE8A6"
      stroke="#FFBE00"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.807"
      d="M12.94 26.482v8.068l-9.418-3.074a2.8 2.8 0 0 1-.553-.202 8 8 0 0 1-.472-.25q-1.32-.762-1.327-1.9v-8.067q.007 1.137 1.327 1.9.206.118.472.25c.266.132.363.153.553.202l3.759 1.226 5.66 1.847Z"
    ></path>
    <path
      fill="#FFE8A6"
      stroke="#FFBE00"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.807"
      d="m46.536 23.485-3.295-3.803-1.372-1.582.048-.217 1.275-5.87a2 2 0 0 0 .049-.39 1.5 1.5 0 0 0-.262-.844c-.246-.379-.618-.714-1.114-.996q-.74-.428-1.726-.645a7.4 7.4 0 0 0-2.134-.121l-10.544.762-9.334-2.694a7.6 7.6 0 0 0-2.916-.242q-1.475.162-2.497.754a3.7 3.7 0 0 0-.839.65 1.9 1.9 0 0 0-.468.818l-1.851 6.252-6.918 3.8q-1.472.803-1.468 1.94.007 1.137 1.327 1.9.206.118.472.25c.178.089.363.153.553.202l3.759 1.226 5.66 1.847 5.324 5.438q.696.544.782.593 1.314.762 3.287.762 1.914.007 3.284-.803a.5.5 0 0 0 .076-.04l1.928-1.17 2.336-1.416 2.283-1.383 3.307-.327 7.398-.726.206-.02a6.5 6.5 0 0 0 1.412-.27 5.6 5.6 0 0 0 1.13-.485c.705-.407 1.149-.899 1.322-1.476a1.5 1.5 0 0 0 .069-.451c0-.42-.182-.823-.549-1.223m-25.17-9.475q1.021-.59 2.46-.589 1.437.005 2.465.597 1.03.595 1.037 1.424 0 .832-1.02 1.42a4 4 0 0 1-.92.387c-.464.138-.98.202-1.541.202-.956 0-1.779-.202-2.465-.597q-.788-.453-.972-1.045c-.04-.12-.06-.25-.06-.379q-.006-.828 1.016-1.42m5.704 10.274q-1.681.224-3.429.085c-1.202-.097-2.295-.327-3.28-.702a9 9 0 0 1-1.407-.658q-1.006-.575-1.593-1.266c-.383-.448-.637-.924-.762-1.436q-.375-1.568.762-3.034l7.438 4.292 2.392 1.384 1.698.98a15 15 0 0 1-1.82.355Zm7.47-2.666q-1.023.588-2.456.589c-.96-.004-1.78-.202-2.469-.597q-1.027-.598-1.032-1.424c-.005-.553.338-1.029 1.02-1.42q1.022-.594 2.456-.589c.96 0 1.783.202 2.469.597q1.028.593 1.033 1.424.007.827-1.021 1.42"
    ></path>
    <path
      fill="#FFE8A6"
      stroke="#FFBE00"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.807"
      d="M17.361 17.274v4.469c-.383-.448-.637-.924-.762-1.436q-.375-1.568.762-3.033m9.967-1.831q0 .83-1.02 1.42a4 4 0 0 1-.92.387c-.464.137-.98.201-1.541.201q-1.435-.002-2.465-.597-.788-.453-.972-1.044-.06-.184-.06-.38-.007-.827 1.016-1.42c.682-.395 1.5-.588 2.46-.588q1.437.005 2.465.597 1.03.593 1.037 1.424m8.232 4.755q.007.827-1.02 1.42-1.022.587-2.457.588c-.96-.004-1.779-.201-2.468-.597-.686-.399-1.029-.87-1.033-1.423s.339-1.029 1.02-1.42q1.023-.594 2.457-.59c.96 0 1.783.203 2.469.598q1.027.593 1.032 1.424"
    ></path>
    <path
      fill="#FFE8A6"
      stroke="#FFBE00"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.807"
      d="M28.89 23.93a15 15 0 0 1-1.82.354q-1.681.225-3.428.085c-1.202-.097-2.296-.327-3.28-.702a9 9 0 0 1-1.407-.658q-1.005-.575-1.594-1.266v-4.47l7.438 4.292 2.392 1.384 1.698.98Zm18.195.777v8.12c0 .133-.024.262-.069.4-.173.576-.617 1.068-1.323 1.476a5.6 5.6 0 0 1-1.129.484c-.42.133-.891.226-1.412.27l-10.91 1.073v-8.067l3.307-.327 7.398-.726.205-.02a6.5 6.5 0 0 0 1.412-.27 5.6 5.6 0 0 0 1.13-.484c.705-.408 1.149-.9 1.322-1.477a1.5 1.5 0 0 0 .069-.451ZM32.24 28.463v8.067l-6.546 3.97q-1.394.847-3.36.842-1.973 0-3.288-.762-.085-.048-.782-.593L12.94 34.55v-8.068l5.324 5.438q.697.544.782.593 1.315.762 3.288.762c1.274.004 2.372-.262 3.283-.803a.5.5 0 0 0 .077-.04l1.928-1.17 2.335-1.416zm11-16.84v8.059L41.87 18.1l.047-.218 1.275-5.87a1.6 1.6 0 0 0 .048-.391Z"
    ></path>
  </svg>
);

export const KidStar: React.FC<React.SVGProps<SVGElement>> = ({
  className,
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 48 48"
    className={cn("w-12", className)}
  >
    <path
      fill="#FFE8A6"
      stroke="#FFBE00"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.85"
      d="M12.956 26.226v8.495L3.59 31.663a3 3 0 0 1-.553-.2 8 8 0 0 1-.471-.25q-1.312-.758-1.317-1.89v-8.496q.005 1.133 1.317 1.89.204.118.471.25.267.13.553.2l4.269 1.393z"
    ></path>
    <path
      fill="#FFE8A6"
      stroke="#FFBE00"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.85"
      d="M32.16 28.192v8.496l-6.512 3.95c-.922.565-2.04.846-3.343.841q-1.964-.001-3.271-.76c-.056-.03-.315-.23-.782-.59l-5.297-5.408v-8.495l5.297 5.407q.7.543.782.59 1.307.76 3.27.76 1.96.008 3.344-.84l6.511-3.95Z"
    ></path>
    <path
      fill="#FFE8A6"
      stroke="#FFBE00"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.85"
      d="M46.93 24.467q.001.218-.068.442-.26.86-1.317 1.47-.49.281-1.121.48-.632.204-1.41.267l-.578.056-10.276 1.01-6.512 3.951c-.921.565-2.039.845-3.343.841q-1.963-.001-3.27-.76c-.056-.03-.315-.23-.782-.59l-5.297-5.408-5.097-1.665-4.27-1.394a3 3 0 0 1-.552-.2 8 8 0 0 1-.471-.25q-1.312-.757-1.317-1.89c-.004-.752.48-1.398 1.461-1.929l6.877-3.784 1.848-6.22c.077-.296.234-.568.463-.81.23-.247.51-.46.833-.65q1.019-.588 2.489-.748a7.5 7.5 0 0 1 2.901.242l9.282 2.68 10.492-.76a7 7 0 0 1 2.124.123q.982.21 1.716.638.738.426 1.109.993.253.39.258.829v.013q0 .184-.046.382l-1.317 6.057.463.535.743.858.154.179 3.283 3.789q.547.593.547 1.223Z"
    ></path>
    <path
      fill="#FFE8A6"
      stroke="#FFBE00"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.85"
      d="M46.93 24.467v8.517c0 .136-.026.28-.068.42q-.26.86-1.317 1.47a5.7 5.7 0 0 1-1.122.48q-.632.205-1.41.268L32.16 36.688v-8.495l10.276-1.011.577-.056q.78-.063 1.41-.267a5.7 5.7 0 0 0 1.122-.48q1.057-.61 1.317-1.47.069-.224.068-.442"
    ></path>
    <path fill="#FFE8A6" d="M46.929 24.467v-.114Z"></path>
    <path
      stroke="#FFBE00"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.85"
      d="M46.929 24.467v-.114"
    ></path>
    <path
      fill="#FFE8A6"
      stroke="#FFBE00"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.85"
      d="M43.102 11.443v8.012l-.157-.179-.744-.858-.463-.535 1.317-6.057q.046-.198.047-.383"
    ></path>
  </svg>
);

export const Receipt: React.FC<React.SVGProps<SVGElement>> = ({
  className,
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 48 48"
    className={cn("w-12", className)}
  >
    <path
      fill="#C8E7FF"
      stroke="#229EFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.727"
      d="M11.098 27.296v7.273-1.16q-.009-.218-.258-.364a1.23 1.23 0 0 0-.63-.146H8.197c-.25-.007-.462-.054-.629-.152q-.249-.144-.255-.364V25.11q.005.221.255.364c.167.098.378.145.63.15h2.014q.376.003.629.148.25.146.254.364v1.16zM14.883 29.481v7.273l-.007-1.16q0-.22-.251-.364a1.24 1.24 0 0 0-.63-.145h-2.014c-.25-.007-.461-.055-.629-.153-.167-.094-.25-.218-.254-.363v-7.273q.004.22.254.364.252.145.63.149h2.014q.374.003.629.149c.167.094.25.218.25.363zm3.787 2.186v7.273l-.008-1.16q0-.221-.251-.364c-.17-.098-.378-.145-.633-.15h-2.01q-.378-.003-.63-.148-.252-.146-.254-.364v-7.273q.002.218.254.364.253.146.63.146h2.01c.255.007.462.054.633.152q.25.144.25.364l.008 1.16Z"
    ></path>
    <path
      fill="#C8E7FF"
      stroke="#229EFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.727"
      d="M46.887 20.038q-.109-.158-.422-.157H44.64q-.377-.003-.629-.149c-.167-.098-.255-.218-.255-.363l-.007-1.164q0-.218-.25-.364a1.3 1.3 0 0 0-.63-.145h-2.014c-.251-.004-.462-.051-.63-.15q-.252-.146-.254-.363v-1.164c-.007-.141-.09-.265-.258-.36a1.23 1.23 0 0 0-.63-.149H37.07q-.377 0-.629-.149-.25-.146-.255-.363v-1.16c-.007-.146-.09-.27-.258-.364a1.23 1.23 0 0 0-.629-.15h-2.014q-.377-.003-.63-.148-.25-.146-.25-.364l-.008-1.16c0-.145-.087-.269-.254-.363a1.23 1.23 0 0 0-.63-.15h-2.01c-.255-.003-.462-.05-.633-.149q-.25-.146-.25-.363l-.008-1.16c0-.146-.087-.27-.255-.364-.167-.098-.378-.145-.629-.149h-2.01c-.255-.004-.462-.051-.633-.15q-.252-.145-.251-.363l-.008-1.05c0-.124-.09-.204-.269-.248a.64.64 0 0 0-.487.062L1.251 20.379q-.29.168-.291.364c0 .066.025.13.073.2q.223.31.85.31h.757q.377.003.63.148c.166.098.254.218.254.364l.007 1.16c0 .145.084.269.25.363.172.099.379.146.63.15h2.014q.377 0 .63.149.25.146.254.363v1.16q.009.221.258.364.252.145.63.149h2.014c.25.004.462.05.629.15q.249.145.255.363v1.16c.007.145.09.269.258.363.167.099.378.146.629.15h2.014c.251.003.458.05.63.149.167.094.25.218.25.363l.008 1.16q.002.218.254.364.251.146.63.145h2.01c.255.008.462.055.633.153q.25.144.25.364l.008 1.16q0 .217.255.363.252.147.629.146h2.01c.252.007.462.054.63.152.17.095.254.219.254.364v.433c.004.243.182.407.542.49.356.088.68.044.97-.123l.976-.563 2.509-1.448 2.505-1.447 2.51-1.447 2.505-1.448 5.007-2.89 6.81-3.931q.145-.084.146-.179a.2.2 0 0 0-.04-.101m-20.69 7.796-.03.015q-.525.289-1.229.29c-.469 0-.902-.105-1.258-.312l-7.578-4.375-3.79-2.185-1.25-.724q-.534-.309-.538-.727c0-.277.174-.52.53-.724q.535-.31 1.255-.305.726 0 1.262.309l1.25.72 11.364 6.563q.54.312.539.728.003.418-.528.727Zm5.014-2.898s-.022.01-.033.018c-.349.196-.756.29-1.225.29q-.722-.003-1.258-.312l-7.582-4.374-3.786-2.186-1.25-.724q-.534-.311-.539-.727 0-.42.531-.723.534-.311 1.258-.31.722.004 1.258.313l1.251.72 11.368 6.564q.533.309.538.727c0 .276-.178.52-.531.724m5.014-2.895s-.025.015-.04.022q-.518.287-1.218.284c-.48 0-.902-.102-1.258-.31l-11.367-6.563-1.247-.72q-.539-.312-.542-.727c0-.28.178-.52.53-.728q.534-.305 1.259-.305.724.002 1.258.309l12.618 7.287q.535.307.538.728c0 .276-.174.52-.53.723Z"
    ></path>
    <path
      fill="#C8E7FF"
      stroke="#229EFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.727"
      d="M31.742 24.212q0 .417-.531.724c-.011.007-.022.01-.033.018-.349.197-.756.291-1.225.291-.48-.004-.902-.105-1.258-.313l-7.582-4.374-3.786-2.186-1.25-.723q-.534-.312-.539-.728 0-.42.531-.723.533-.31 1.258-.31c.48.004.902.106 1.258.313l1.251.72 11.367 6.564q.534.309.539.727m5.015-2.894c0 .276-.175.52-.532.723q-.02.012-.04.022c-.345.19-.752.288-1.218.284q-.721.001-1.258-.31l-11.367-6.563-1.247-.72q-.539-.311-.542-.727.001-.418.53-.727.534-.306 1.259-.306.725.002 1.258.31l12.618 7.286q.534.307.539.728m-10.034 5.789q.004.418-.527.727-.014.007-.029.015-.525.289-1.23.29c-.468 0-.9-.105-1.257-.312l-7.578-4.375-3.79-2.185-1.25-.724q-.534-.309-.539-.727-.001-.417.531-.724.535-.31 1.255-.305.726 0 1.262.309l1.25.72 11.364 6.563q.539.312.538.728m20.203-6.967v7.272q-.001.095-.145.178L23.959 40.765q-.436.252-.97.123-.54-.125-.539-.49v-7.273q-.001.365.538.49c.357.088.68.044.971-.123l.975-.563 2.509-1.448 2.505-1.447 2.51-1.447 2.505-1.448 5.007-2.89 6.811-3.931q.144-.084.145-.179Z"
    ></path>
    <path fill="#C8E7FF" d="M46.928 20.14v-.011Z"></path>
    <path
      stroke="#229EFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.727"
      d="M46.928 20.14v-.011"
    ></path>
    <path
      fill="#C8E7FF"
      stroke="#229EFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.727"
      d="M3.53 22.925v7.273l-.006-1.16c0-.146-.088-.266-.255-.364q-.252-.146-.629-.145h-.756q-.628-.004-.851-.313a.36.36 0 0 1-.073-.2v-7.273a.35.35 0 0 0 .073.2q.223.31.85.31h.757q.377.003.63.148c.166.099.254.218.254.364l.007 1.16Zm3.783 2.185v7.273-1.16c-.007-.145-.09-.265-.258-.363q-.251-.147-.63-.146H4.412c-.25-.007-.458-.054-.629-.153-.167-.094-.25-.218-.25-.363v-7.273c0 .145.083.27.25.364.171.098.378.145.63.149h2.014q.377 0 .629.149.25.146.254.364v1.16h.004Zm15.137 8.015v7.273-.433c-.003-.146-.087-.27-.257-.364q-.253-.145-.63-.149h-2.01c-.251-.003-.462-.05-.63-.149q-.255-.146-.254-.363v-7.273q0 .217.255.363.252.147.629.146h2.01c.251.007.462.054.63.153.17.094.254.218.254.363v.433z"
    ></path>
  </svg>
);

export const ReceiptLong: React.FC<React.SVGProps<SVGElement>> = ({
  className,
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 48 48"
    className={cn("w-12", className)}
  >
    <path
      fill="#C8E7FF"
      stroke="#229EFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.774"
      d="M47.083 18.863v.202q.075-.092 0-.202m-14.307 3.553a.6.6 0 0 1-.027.183q-.093.32-.523.565-.544.318-1.293.317-.747 0-1.296-.321-.553-.318-.554-.747c-.001-.429.182-.538.546-.747q.55-.319 1.293-.318.14-.001.267.016c.387.03.727.131 1.03.305q.447.254.53.585v.008h.004a.6.6 0 0 1 .023.154"
    ></path>
    <path
      fill="#C8E7FF"
      stroke="#229EFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.774"
      d="M46.646 18.704h-1.878a1.3 1.3 0 0 1-.65-.155q-.26-.15-.26-.371l-.007-1.196c0-.151-.09-.275-.26-.376q-.26-.15-.65-.15h-2.07a1.3 1.3 0 0 1-.651-.155q-.26-.15-.26-.376l-.007-1.196c0-.147-.09-.275-.26-.376a1.3 1.3 0 0 0-.65-.147h-2.07a1.4 1.4 0 0 1-.651-.155c-.17-.1-.26-.224-.26-.375l-.007-1.196q.001-.226-.26-.376-.26-.15-.65-.15h-2.07q-.39-.006-.651-.155c-.17-.101-.26-.225-.26-.372l-.007-1.196q.001-.226-.26-.376a1.3 1.3 0 0 0-.65-.15h-2.07q-.391-.006-.647-.155-.263-.15-.264-.376V8.09c-.007-.124-.096-.209-.282-.251a.65.65 0 0 0-.5.065l-17.303 9.987-2.597-1.501q-.553-.319-1.297-.318c-.495-.004-.929.105-1.293.314l-2.582 1.49q-1.616.935-1.606 2.241c.004.871.546 1.622 1.63 2.245l2.83 1.634 12.762 7.37q1.556.895 3.704.937.093.005.186.004a9 9 0 0 0 1.812-.17 6.6 6.6 0 0 0 2.067-.76l3.286-1.896 3.693-2.133.182-.104 3.69-2.13.518-.301 2.79-1.61 7.015-4.05a.35.35 0 0 0 .112-.089v-.2q-.117-.159-.437-.16m-9.7 3.24-.299.17-2.079 1.2-1.61.93-.182.104-.027.016-.763.441-2.582 1.49-.32.186-.206.12-.766.441-2.582 1.49-1.8 1.042-.53.306q-.551.313-1.294.313-.744-.001-1.296-.32c-.368-.21-.554-.462-.558-.748q-.001-.429.55-.747l2.33-1.347.252-.143q.546-.318.546-.748c-.004-.286-.186-.534-.554-.747l-2.369-1.366-.817-.472-.507-.294-2.593-1.499-4.111-2.372 14.202-8.2 14.292 8.254-4.328 2.5Z"
    ></path>
    <path
      fill="#C8E7FF"
      stroke="#229EFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.774"
      d="m41.272 19.444-4.328 2.5-.298.17v-1.93q-.001-.431-.553-.752-.553-.318-1.297-.317c-.496-.004-.93.104-1.293.313a1.5 1.5 0 0 0-.345.264.68.68 0 0 0-.2.483v2.21l-.206-.12h-.004V17.93q-.001-.428-.553-.747l-5.195-3s-.012-.008-.02-.011V11.19l14.292 8.253Z"
    ></path>
    <path
      fill="#C8E7FF"
      stroke="#229EFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.774"
      d="M36.646 20.183v.008q0 .425-.546.74-.021.01-.042.023-.535.29-1.25.29c-.477 0-.93-.108-1.297-.321q-.553-.316-.554-.747a.68.68 0 0 1 .201-.484 1.5 1.5 0 0 1 .345-.264c.364-.209.797-.317 1.293-.313q.744-.001 1.297.317.552.32.553.751M32.75 17.93v.008c0 .283-.183.534-.547.74q-.021.01-.042.023-.535.295-1.25.294c-.477 0-.93-.109-1.298-.322l-2.632-1.517-1.057-.612-1.51-.87q-.549-.318-.553-.748c0-.286.182-.538.546-.747q.55-.318 1.297-.317c.5 0 .91.104 1.277.31q.01.005.02.011l5.195 3q.552.318.553.747Z"
    ></path>
    <path
      fill="#C8E7FF"
      stroke="#229EFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.774"
      d="M26.981 11.19v2.982c-.368-.206-.79-.31-1.278-.31-.487 0-.929.104-1.296.317q-.546.316-.546.747v1.92l-.736-.425q-.551-.32-1.296-.322c-.745-.002-.93.105-1.293.314q-.552.318-.546.747v5.81l-.507.29-2.594-1.498-4.11-2.372zm5.795 11.227v1.932l-.027.015-.763.441-2.582 1.49-.321.186v-4.068q.001.429.554.747.551.32 1.296.322c.745.002.93-.105 1.293-.318q.43-.245.523-.565a.6.6 0 0 0 .027-.182"
    ></path>
    <path
      fill="#C8E7FF"
      stroke="#229EFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.774"
      d="M32.75 17.938v4.316q-.083-.33-.531-.585a2.4 2.4 0 0 0-1.03-.305 2 2 0 0 0-.267-.016q-.742 0-1.293.318-.546.315-.546.747v3.697l-.205-.12v-5.822a.5.5 0 0 0-.023-.151c-.054-.225-.229-.422-.534-.596l-1.34-.775-2.346-1.355-.774-.445v-1.92q.004.429.554.747l1.51.871 1.056.612 2.632 1.517q.553.32 1.297.322c.496 0 .895-.097 1.25-.294l.043-.024c.364-.205.546-.456.546-.74Z"
    ></path>
    <path
      fill="#C8E7FF"
      stroke="#229EFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.774"
      d="M28.878 20.168V26.6l-.767.442-2.581 1.49-1.8-1.041V26.14c-.004-.287-.186-.534-.554-.747l-2.369-1.367-.817-.472V17.16q.001.431.554.751l1.51.871 1.807 1.045.786.453 1.092.631c.367.213.8.317 1.296.321q.748.001 1.297-.317.546-.318.546-.747"
    ></path>
    <path
      fill="#C8E7FF"
      stroke="#229EFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.774"
      d="M23.73 26.14v3.434l-.531.306q-.551.314-1.293.314-.744-.001-1.297-.322-.551-.315-.557-.747-.001-.428.55-.747l2.33-1.347.251-.143q.546-.318.546-.747Z"
    ></path>
    <path
      fill="#C8E7FF"
      stroke="#229EFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.774"
      d="M47.122 26.706c.004.07-.05.131-.151.19L25.797 39.12q-1.614.935-3.88.929-2.27-.006-3.89-.94L2.436 30.103C1.351 29.482.81 28.73.805 27.86v-7.742c.005.871.546 1.622 1.63 2.245l2.83 1.634 12.763 7.37q1.556.895 3.704.937.093.005.186.004.964.002 1.812-.17a6.6 6.6 0 0 0 2.067-.759l3.286-1.897 3.693-2.133.182-.104 3.689-2.13.519-.301 2.79-1.61 7.015-4.05a.4.4 0 0 0 .112-.088z"
    ></path>
    <path
      fill="#C8E7FF"
      stroke="#229EFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.774"
      d="M28.878 20.168q0 .428-.546.747-.549.319-1.297.318-.744-.004-1.296-.322l-1.092-.63-.786-.454-1.808-1.045-1.51-.87q-.552-.321-.553-.752-.006-.428.546-.747.548-.313 1.293-.313.744.001 1.297.32l.735.427.774.445 2.346 1.355 1.34.774c.305.174.48.372.534.596q.023.075.023.151m7.769.022v1.925l-2.079 1.2-1.61.929v-4.069q.001.432.554.747.551.32 1.296.322c.745.002.895-.097 1.25-.29l.043-.024q.546-.315.546-.74"
    ></path>
  </svg>
);

export const Check: React.FC<React.SVGProps<SVGElement>> = ({
  className,
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 33 33"
    className={cn("w-12", className)}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.544 32.544c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16ZM5.709 17.369l2.505-2.384c.307-.393 1.094-.944 1.79 0 .695.943 2.113 2.64 2.735 3.37.263.203.963.47 1.66-.098.696-.568 7.796-6.572 11.26-9.504.323-.27 1.098-.714 1.613-.319.645.495.585 1.345-.322 2.275-.725.744-8.67 9.25-12.552 13.411-.537.52-1.924 1.25-3.181 0a744.896 744.896 0 0 0-5.4-5.262c-.299-.246-.74-.888-.108-1.49Z"
      clipRule="evenodd"
    />
  </svg>
);

export const ChevronDown: React.FC<React.SVGProps<SVGElement>> = ({
  className,
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    className={cn("w-12", className)}
  >
    <path
      fill="#FFB400"
      d="M4.672 5c-6.122.39-4.939 5.699-3.582 8.304 2.66 2.93 8.727 9.411 11.723 11.886s6.024 1.031 7.164 0c2.497-2.768 8.141-9.02 10.747-11.886 3.386-6.513-.76-8.25-3.257-8.304-8.141 1.791-16.282 1.791-22.795 0"
    ></path>
  </svg>
);

export const ChevronUp: React.FC<React.SVGProps<SVGElement>> = ({
  className,
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    className={cn("w-12", className)}
  >
    <path
      fill="#FFB400"
      d="M4.672 27c-6.122-.39-4.939-5.699-3.582-8.304 2.66-2.93 8.727-9.411 11.723-11.886s6.024-1.031 7.164 0c2.497 2.768 8.141 9.02 10.747 11.886 3.386 6.513-.76 8.25-3.257 8.304-8.141-1.791-16.282-1.791-22.795 0"
    ></path>
  </svg>
);

export const Pencil: React.FC<React.SVGProps<SVGElement>> = ({
  className,
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 36 36"
    className={cn("w-12", className)}
  >
    <path
      fill="currentColor"
      d="M32.865 3.185C31.637 2.113 30.255 1.5 28.566 1.5c-1.688 0-3.377.766-4.605 1.992L6 21.572l1.075 1.073 1.074 1.073 4.145 4.137 1.075 1.072L14.443 30l18.115-18.08c2.456-2.452 2.61-6.436.307-8.735M9.941 29.442l-3.089-3.089-1.176-1.176L4.499 24c-.294.441-.441 1.03-.588 1.47l-2.353 7.207c-.147.589 0 1.03.294 1.471.294.294.882.441 1.47.294l7.207-2.206c.589-.147 1.03-.441 1.471-.588l-1.03-1.03z"
    ></path>
  </svg>
);

export const Trash: React.FC<React.SVGProps<SVGElement>> = ({
  className,
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 36 36"
    className={cn("w-12", className)}
  >
    <path
      fill="currentColor"
      d="M12.6 4.5h10.95c.9 0 1.5-.6 1.5-1.5s-.6-1.5-1.5-1.5H12.6c-.9 0-1.5.6-1.5 1.5s.6 1.5 1.5 1.5"
    ></path>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M33 6.9H3c-.9 0-1.5.6-1.5 1.5S2.1 9.9 3 9.9h2.1v17.55c0 3.9 3 7.05 6.9 7.05h12c3.9 0 6.9-3.15 6.9-6.9V9.9H33c.9 0 1.5-.6 1.5-1.5s-.6-1.5-1.5-1.5M13.95 27.75c-.9 0-1.5-.6-1.5-1.5V15.3c0-.9.6-1.5 1.5-1.5s1.5.6 1.5 1.5v10.95c0 .75-.75 1.5-1.5 1.5m6.6-1.5c0 .9.6 1.5 1.5 1.5s1.5-.75 1.5-1.5V15.3c0-.9-.6-1.5-1.5-1.5s-1.5.6-1.5 1.5z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const Stars: React.FC<React.SVGProps<SVGElement>> = ({
  className,
}: {
  className?: string;
}) => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("w-12", className)}
  >
    <path
      d="M23.3992 23.55C22.7992 23.55 22.3492 23.25 22.0492 22.8L20.2492 19.65C19.4992 18 17.9992 16.5 16.3492 15.6L13.1992 13.8C12.7492 13.65 12.4492 13.05 12.4492 12.6C12.4492 12 12.7492 11.55 13.1992 11.25L16.3492 9.45C17.9992 8.55 19.4992 7.2 20.3992 5.4L22.1992 2.25C22.3492 1.8 22.9492 1.5 23.3992 1.5C23.9992 1.5 24.4492 1.8 24.7492 2.25L26.5492 5.4C27.4492 7.05 28.9492 8.55 30.5992 9.45L33.7492 11.25C34.1992 11.55 34.4992 12 34.4992 12.6C34.4992 13.2 34.1992 13.65 33.7492 13.95L30.5992 15.75C28.9492 16.65 27.4492 18.15 26.5492 19.8L24.7492 22.95C24.4492 23.25 23.9992 23.55 23.3992 23.55Z"
      fill="currentColor"
    />
    <path
      d="M9.75 34.5002C9.15 34.5002 8.7 34.2002 8.4 33.7502L7.5 31.9502C6.75 30.4502 5.55 29.2502 4.05 28.5002L2.25 27.6002C1.8 27.3002 1.5 26.7002 1.5 26.2502C1.5 25.6502 1.8 25.2002 2.25 24.9002L4.05 24.0002C5.55 23.2502 6.75 22.0502 7.5 20.5502L8.4 18.7502C9 17.8502 10.5 17.8502 11.1 18.7502L12 20.5502C12.75 22.0502 13.95 23.2502 15.45 24.0002L17.25 24.9002C17.7 25.2002 18 25.6502 18 26.2502C18 26.8502 17.7 27.3002 17.25 27.6002L15.6 28.5002C14.1 29.2502 12.9 30.4502 12.15 31.9502L11.25 33.7502C10.8 34.2002 10.35 34.5002 9.75 34.5002Z"
      fill="currentColor"
    />
  </svg>
);

export const Download: React.FC<React.SVGProps<SVGElement>> = ({
  className,
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 36 36"
    className={cn("w-12", className)}
  >
    <path
      fill="currentColor"
      d="M27.271 7.776h-.785C24.757 4.849 21.614 3 18 3c-3.457 0-6.757 1.849-8.486 4.776H8.73c-3.93 0-7.23 3.234-7.23 7.24s3.3 7.087 7.229 7.087H12.5c.943 0 1.571-.617 1.571-1.54 0-.925-.628-1.541-1.571-1.541H8.729c-2.2 0-4.086-1.849-4.086-4.006 0-2.31 1.886-4.005 4.086-4.005.471 0 .785 0 1.257.154.785.308 1.571-.154 1.885-.924 1.1-2.62 3.458-4.16 6.129-4.16s5.186 1.54 6.129 4.005c.314.77 1.1 1.079 1.885.925.315-.154.786-.154 1.257-.154 2.358 0 4.086 1.848 4.086 4.005 0 2.311-1.886 4.006-4.086 4.006h-7.7v-4.93c0-.925-.628-1.54-1.571-1.54s-1.571.616-1.571 1.54v12.324l-1.415-1.386a1.54 1.54 0 0 0-2.2 0c-.628.616-.628 1.54 0 2.156l4.086 4.006c.314.308.786.462 1.1.462s.786-.154 1.1-.462l4.086-4.006c.628-.616.628-1.54 0-2.156a1.54 1.54 0 0 0-2.2 0l-1.415 1.232v-4.005h7.7c4.086 0 7.229-3.235 7.229-7.087s-3.143-7.24-7.229-7.24"
    ></path>
  </svg>
);

export const Ask: React.FC<React.SVGProps<SVGElement>> = ({
  className,
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 36 36"
    className={cn("w-12", className)}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.637 18C1.637 9 9 1.637 18 1.637S34.364 9 34.364 18 27 34.364 18 34.364 1.637 27 1.637 18m14.726 3.109c0 .982.654 1.636 1.637 1.636.982 0 1.636-.654 1.636-1.636v-.164c3.11-.818 5.4-3.6 5.4-6.872A6.986 6.986 0 0 0 18 7.036a6.984 6.984 0 0 0-7.036 7.037c0 .98.654 1.636 1.636 1.636s1.637-.655 1.637-1.636c0-2.128 1.636-3.764 3.763-3.764s3.764 1.636 3.764 3.764c0 2.127-1.636 3.763-3.764 3.763-.982 0-1.636.655-1.636 1.636v1.637Zm0 6.218c0 .982.655 1.637 1.637 1.637s1.636-.655 1.636-1.637V25.69c0-.982-.654-1.636-1.636-1.636s-1.637.654-1.637 1.636v1.636Z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const Github: React.FC<React.SVGProps<SVGElement>> = ({
  className,
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className={cn("w-12", className)}
  >
    <path
      fill="currentColor"
      d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75"
    ></path>
  </svg>
);
