import React from "react"
import { SvgIcon, type SvgIconProps } from "@mui/material"

function RewardPointsIcon(props: SvgIconProps) {
  return (
    // <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    //   <rect width="41" height="41" rx="10" fill="#FF1F1F" />
    //   <path d="M11.2778 18.9854L10.9258 19.3406L10.9258 19.3406L11.2778 18.9854ZM11.0703 18.4902L10.5703 18.4899V18.4902H11.0703ZM11.0722 15.8843L11.5722 15.8847V15.8843H11.0722ZM29.9287 15.8843L29.4287 15.8843L29.4287 15.8845L29.9287 15.8843ZM29.9297 18.4089H30.4297L30.4297 18.4088L29.9297 18.4089ZM29.7232 18.9042L30.0751 19.2593L30.0751 19.2593L29.7232 18.9042ZM23.7342 20.0384L23.3885 19.6772L23.3871 19.6786L23.7342 20.0384ZM22.6225 21.111L22.2753 20.7512L22.0845 20.9353L22.1298 21.1965L22.6225 21.111ZM23.9106 19.3283L23.4356 19.4845L23.4361 19.4861L23.9106 19.3283ZM23.3486 18.8602L23.2769 19.355L23.2797 19.3554L23.3486 18.8602ZM21.8125 18.6378L21.365 18.8609L21.4818 19.0951L21.7408 19.1326L21.8125 18.6378ZM21.125 17.2587L20.6772 17.4811L20.6776 17.4818L21.125 17.2587ZM20.5008 16.8728L20.5026 16.3728H20.5008V16.8728ZM19.8737 17.2578L19.4273 17.0325L19.4262 17.0348L19.8737 17.2578ZM19.1863 18.6378L19.2578 19.1327L19.517 19.0952L19.6339 18.8607L19.1863 18.6378ZM17.653 18.8592L17.7229 19.3544L17.7245 19.3541L17.653 18.8592ZM17.0873 19.3283L16.6128 19.1705L16.6123 19.1721L17.0873 19.3283ZM17.2636 20.0384L17.6108 19.6786L17.6102 19.678L17.2636 20.0384ZM18.3753 21.111L18.868 21.1962L18.9132 20.9352L18.7225 20.7512L18.3753 21.111ZM18.1132 22.6275L18.6059 22.7127L18.6059 22.7127L18.1132 22.6275ZM18.3914 23.3049L18.0994 23.7108L18.1022 23.7128L18.3914 23.3049ZM19.1241 23.3563L18.8932 22.9128L18.8924 22.9132L19.1241 23.3563ZM20.4989 22.6406L20.7297 22.197L20.4989 22.0769L20.268 22.1971L20.4989 22.6406ZM21.8709 23.3544L22.1054 22.9128L22.1017 22.9109L21.8709 23.3544ZM22.6065 23.304L22.3164 22.8966L22.3125 22.8995L22.6065 23.304ZM22.8856 22.6275L23.3782 22.5423L23.3782 22.542L22.8856 22.6275ZM29.2225 21.3922C28.7201 21.3922 28.3184 20.9876 28.3184 20.501H27.3184C27.3184 21.5485 28.1765 22.3922 29.2225 22.3922V21.3922ZM30.4297 22.593C30.4297 21.9257 29.8847 21.3922 29.2225 21.3922V22.3922C29.341 22.3922 29.4297 22.4866 29.4297 22.593H30.4297ZM30.4297 25.1167V22.593H29.4297V25.1167H30.4297ZM26.0239 29.4867C28.4495 29.4867 30.4297 27.5312 30.4297 25.1167H29.4297C29.4297 26.9703 27.9058 28.4867 26.0239 28.4867V29.4867ZM14.977 29.4867H26.0239V28.4867H14.977V29.4867ZM10.5703 25.1167C10.5703 27.5313 12.5516 29.4867 14.977 29.4867V28.4867C13.0949 28.4867 11.5703 26.9701 11.5703 25.1167H10.5703ZM10.5703 22.593V25.1167H11.5703V22.593H10.5703ZM11.7775 21.3922C11.1153 21.3922 10.5703 21.9257 10.5703 22.593H11.5703C11.5703 22.4866 11.659 22.3922 11.7775 22.3922V21.3922ZM12.6826 20.501C12.6826 20.9874 12.2811 21.3922 11.7775 21.3922V22.3922C12.8242 22.3922 13.6826 21.5487 13.6826 20.501H12.6826ZM11.7775 19.691C12.3358 19.691 12.6826 20.0623 12.6826 20.501H13.6826C13.6826 19.4447 12.8204 18.691 11.7775 18.691V19.691ZM10.9258 19.3406C11.1524 19.5652 11.4581 19.691 11.7775 19.691V18.691C11.7217 18.691 11.669 18.6692 11.6297 18.6303L10.9258 19.3406ZM10.5703 18.4902C10.5703 18.8096 10.6988 19.1157 10.9258 19.3406L11.6297 18.6303C11.5908 18.5917 11.5703 18.5408 11.5703 18.4902H10.5703ZM10.5722 15.884L10.5703 18.4899L11.5703 18.4906L11.5722 15.8847L10.5722 15.884ZM14.978 11.5133C12.5523 11.5133 10.5722 13.47 10.5722 15.8843H11.5722C11.5722 14.0306 13.0962 12.5133 14.978 12.5133V11.5133ZM26.022 11.5133H14.978V12.5133H26.022V11.5133ZM30.4287 15.8843C30.4287 13.4698 28.4476 11.5133 26.022 11.5133V12.5133C27.904 12.5133 29.4287 14.0307 29.4287 15.8843H30.4287ZM30.4297 18.4088L30.4287 15.8841L29.4287 15.8845L29.4297 18.4091L30.4297 18.4088ZM30.0751 19.2593C30.302 19.0345 30.4297 18.7271 30.4297 18.4089H29.4297C29.4297 18.4608 29.4083 18.5122 29.3712 18.549L30.0751 19.2593ZM29.2225 19.6097C29.5425 19.6097 29.8482 19.4841 30.0751 19.2593L29.3713 18.549C29.3322 18.5877 29.2796 18.6097 29.2225 18.6097V19.6097ZM28.3184 20.501C28.3184 20.0143 28.7201 19.6097 29.2225 19.6097V18.6097C28.1765 18.6097 27.3184 19.4534 27.3184 20.501H28.3184ZM23.3871 19.6786L22.2753 20.7512L22.9696 21.4709L24.0814 20.3982L23.3871 19.6786ZM23.4361 19.4861C23.4592 19.5554 23.442 19.626 23.3885 19.6772L24.0799 20.3996C24.4131 20.0808 24.5298 19.6057 24.385 19.1705L23.4361 19.4861ZM23.2797 19.3554C23.3545 19.3658 23.4127 19.415 23.4356 19.4845L24.3855 19.1721C24.2425 18.7371 23.8669 18.4274 23.4174 18.3649L23.2797 19.3554ZM21.7408 19.1326L23.2769 19.355L23.4202 18.3653L21.8841 18.143L21.7408 19.1326ZM20.6776 17.4818L21.365 18.8609L22.26 18.4148L21.5725 17.0356L20.6776 17.4818ZM20.499 17.3728C20.5793 17.3731 20.6447 17.4156 20.6772 17.4811L21.5729 17.0363C21.3696 16.6271 20.956 16.3744 20.5026 16.3728L20.499 17.3728ZM20.4989 17.3728H20.5008V16.3728H20.4989V17.3728ZM20.3201 17.483C20.355 17.414 20.422 17.3728 20.4989 17.3728V16.3728C20.044 16.3728 19.632 16.6269 19.4273 17.0325L20.3201 17.483ZM19.6339 18.8607L20.3213 17.4807L19.4262 17.0348L18.7388 18.4149L19.6339 18.8607ZM17.7245 19.3541L19.2578 19.1327L19.1148 18.1429L17.5816 18.3644L17.7245 19.3541ZM17.5617 19.4861C17.585 19.4162 17.6435 19.3655 17.7229 19.3543L17.5832 18.3641C17.1326 18.4277 16.7574 18.7359 16.6128 19.1705L17.5617 19.4861ZM17.6102 19.678C17.5569 19.6267 17.5391 19.5549 17.5622 19.4845L16.6123 19.1721C16.4695 19.6062 16.5856 20.0801 16.917 20.3988L17.6102 19.678ZM18.7225 20.7512L17.6108 19.6786L16.9164 20.3982L18.0282 21.4709L18.7225 20.7512ZM18.6059 22.7127L18.868 21.1962L17.8827 21.0259L17.6205 22.5423L18.6059 22.7127ZM18.6834 22.899C18.6208 22.854 18.5935 22.7845 18.6059 22.7127L17.6205 22.5423C17.5424 22.9938 17.7282 23.4437 18.0994 23.7108L18.6834 22.899ZM18.8006 22.9366C18.761 22.9366 18.7195 22.9246 18.6805 22.897L18.1022 23.7128C18.3085 23.859 18.5517 23.9366 18.8006 23.9366V22.9366ZM18.8924 22.9132C18.8612 22.9295 18.8293 22.9366 18.8006 22.9366V23.9366C18.9926 23.9366 19.1833 23.8896 19.3558 23.7994L18.8924 22.9132ZM20.268 22.1971L18.8932 22.9128L19.3549 23.7998L20.7298 23.0841L20.268 22.1971ZM22.1017 22.9109L20.7297 22.197L20.2681 23.0841L21.6402 23.798L22.1017 22.9109ZM22.3125 22.8995C22.252 22.9434 22.1753 22.9499 22.1054 22.9128L21.6365 23.7961C22.0419 24.0112 22.529 23.9784 22.9004 23.7084L22.3125 22.8995ZM22.3929 22.7127C22.4053 22.7845 22.3779 22.8529 22.3164 22.8967L22.8965 23.7113C23.2707 23.4448 23.4563 22.9937 23.3782 22.5423L22.3929 22.7127ZM22.1298 21.1965L22.3929 22.713L23.3782 22.542L23.1151 21.0256L22.1298 21.1965Z" fill="white" />
    // </svg>
    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.27777 7.98544L0.925838 8.34061L0.925839 8.34061L1.27777 7.98544ZM1.07031 7.49023L0.570312 7.48987V7.49023H1.07031ZM1.0722 4.88433L1.5722 4.88469V4.88433H1.0722ZM19.9287 4.88433H19.4287V4.88451L19.9287 4.88433ZM19.9297 7.40895H20.4297V7.40876L19.9297 7.40895ZM19.7232 7.90415L20.0751 8.25932V8.25932L19.7232 7.90415ZM13.7342 9.0384L13.3885 8.67717L13.3871 8.67857L13.7342 9.0384ZM12.6225 10.111L12.2753 9.75121L12.0845 9.93529L12.1298 10.1965L12.6225 10.111ZM13.9106 8.32829L13.4356 8.48453L13.4361 8.48612L13.9106 8.32829ZM13.3486 7.86018L13.2769 8.35503L13.2797 8.35542L13.3486 7.86018ZM11.8125 7.63781L11.365 7.86086L11.4818 8.09514L11.7408 8.13265L11.8125 7.63781ZM11.125 6.2587L10.6772 6.48112L10.6776 6.48176L11.125 6.2587ZM10.5008 5.87282L10.5026 5.37282H10.5008V5.87282ZM9.87373 6.25777L9.42733 6.03252L9.42618 6.03484L9.87373 6.25777ZM9.1863 7.63781L9.25777 8.13267L9.51705 8.09523L9.63385 7.86074L9.1863 7.63781ZM7.65303 7.85925L7.72287 8.35435L7.72451 8.35411L7.65303 7.85925ZM7.08725 8.32829L6.61281 8.17046L6.61229 8.17206L7.08725 8.32829ZM7.26359 9.0384L7.61075 8.67857L7.61018 8.67802L7.26359 9.0384ZM8.37535 10.111L8.86804 10.1962L8.91317 9.93515L8.72251 9.75121L8.37535 10.111ZM8.1132 11.6275L8.60588 11.7127L8.6059 11.7127L8.1132 11.6275ZM8.39138 12.3049L8.09937 12.7108L8.10223 12.7128L8.39138 12.3049ZM9.12407 12.3563L8.89319 11.9128L8.89236 11.9132L9.12407 12.3563ZM10.4989 11.6406L10.7297 11.197L10.4989 11.0769L10.268 11.1971L10.4989 11.6406ZM11.8709 12.3544L12.1054 11.9128L12.1017 11.9109L11.8709 12.3544ZM12.6065 12.304L12.3164 11.8966L12.3125 11.8995L12.6065 12.304ZM12.8856 11.6275L13.3782 11.5423L13.3782 11.542L12.8856 11.6275ZM19.2225 10.3922C18.7201 10.3922 18.3184 9.9876 18.3184 9.50096H17.3184C17.3184 10.5485 18.1765 11.3922 19.2225 11.3922V10.3922ZM20.4297 11.593C20.4297 10.9257 19.8847 10.3922 19.2225 10.3922V11.3922C19.341 11.3922 19.4297 11.4866 19.4297 11.593H20.4297ZM20.4297 14.1167V11.593H19.4297V14.1167H20.4297ZM16.0239 18.4867C18.4495 18.4867 20.4297 16.5312 20.4297 14.1167H19.4297C19.4297 15.9703 17.9058 17.4867 16.0239 17.4867V18.4867ZM4.97703 18.4867H16.0239V17.4867H4.97703V18.4867ZM0.570312 14.1167C0.570312 16.5313 2.55164 18.4867 4.97703 18.4867V17.4867C3.09494 17.4867 1.57031 15.9701 1.57031 14.1167H0.570312ZM0.570312 11.593V14.1167H1.57031V11.593H0.570312ZM1.77754 10.3922C1.11534 10.3922 0.570312 10.9257 0.570312 11.593H1.57031C1.57031 11.4866 1.65896 11.3922 1.77754 11.3922V10.3922ZM2.68256 9.50096C2.68256 9.98738 2.28107 10.3922 1.77754 10.3922V11.3922C2.82424 11.3922 3.68256 10.5487 3.68256 9.50096H2.68256ZM1.77754 8.691C2.33582 8.691 2.68256 9.06229 2.68256 9.50096H3.68256C3.68256 8.44466 2.82042 7.691 1.77754 7.691V8.691ZM0.925839 8.34061C1.15245 8.56515 1.4581 8.691 1.77754 8.691V7.691C1.72167 7.691 1.669 7.66921 1.62969 7.63027L0.925839 8.34061ZM0.570312 7.49023C0.570312 7.80963 0.698827 8.11567 0.925838 8.34061L1.62969 7.63027C1.59079 7.59172 1.57031 7.54084 1.57031 7.49023H0.570312ZM0.572199 4.88396L0.570313 7.48987L1.57031 7.4906L1.5722 4.88469L0.572199 4.88396ZM4.97797 0.513306C2.55227 0.513306 0.572198 2.46996 0.572198 4.88433H1.5722C1.5722 3.03057 3.0962 1.51331 4.97797 1.51331V0.513306ZM16.022 0.513306H4.97797V1.51331H16.022V0.513306ZM20.4287 4.88433C20.4287 2.46981 18.4476 0.513306 16.022 0.513306V1.51331C17.904 1.51331 19.4287 3.03073 19.4287 4.88433H20.4287ZM20.4297 7.40876L20.4287 4.88414L19.4287 4.88451L19.4297 7.40913L20.4297 7.40876ZM20.0751 8.25932C20.302 8.03446 20.4297 7.72713 20.4297 7.40895H19.4297C19.4297 7.46076 19.4083 7.51222 19.3713 7.54898L20.0751 8.25932ZM19.2225 8.60971C19.5425 8.60971 19.8482 8.48411 20.0751 8.25932L19.3713 7.54898C19.3322 7.58768 19.2796 7.60971 19.2225 7.60971V8.60971ZM18.3184 9.50096C18.3184 9.01432 18.7201 8.60971 19.2225 8.60971V7.60971C18.1765 7.60971 17.3184 8.4534 17.3184 9.50096H18.3184ZM13.3871 8.67857L12.2753 9.75121L12.9696 10.4709L14.0814 9.39823L13.3871 8.67857ZM13.4361 8.48612C13.4592 8.55539 13.442 8.62603 13.3885 8.67717L14.0799 9.39963C14.4131 9.08077 14.5298 8.60575 14.385 8.17046L13.4361 8.48612ZM13.2797 8.35542C13.3545 8.36581 13.4127 8.41498 13.4356 8.48452L14.3855 8.17206C14.2425 7.73705 13.8669 7.42743 13.4174 7.36494L13.2797 8.35542ZM11.7408 8.13265L13.2769 8.35502L13.4202 7.36534L11.8841 7.14297L11.7408 8.13265ZM10.6776 6.48176L11.365 7.86086L12.26 7.41475L11.5725 6.03565L10.6776 6.48176ZM10.4991 6.37281C10.5793 6.37309 10.6447 6.41562 10.6772 6.48112L11.5729 6.03629C11.3696 5.62714 10.956 5.37441 10.5026 5.37282L10.4991 6.37281ZM10.4989 6.37282H10.5008V5.37282H10.4989V6.37282ZM10.3201 6.48302C10.355 6.41397 10.422 6.37282 10.4989 6.37282V5.37282C10.044 5.37282 9.63201 5.62692 9.42734 6.03252L10.3201 6.48302ZM9.63385 7.86074L10.3213 6.4807L9.42618 6.03484L8.73875 7.41487L9.63385 7.86074ZM7.72451 8.35411L9.25777 8.13267L9.11483 7.14294L7.58156 7.36438L7.72451 8.35411ZM7.56169 8.48612C7.58496 8.41619 7.64351 8.36554 7.72287 8.35435L7.5832 7.36415C7.13261 7.4277 6.7574 7.73585 6.61282 8.17046L7.56169 8.48612ZM7.61018 8.67802C7.55686 8.62674 7.53906 8.55493 7.56222 8.48452L6.61229 8.17206C6.46948 8.60621 6.58558 9.08005 6.917 9.39878L7.61018 8.67802ZM8.72251 9.75121L7.61075 8.67857L6.91642 9.39823L8.02818 10.4709L8.72251 9.75121ZM8.6059 11.7127L8.86804 10.1962L7.88266 10.0259L7.62051 11.5423L8.6059 11.7127ZM8.68338 11.899C8.62084 11.854 8.59347 11.7845 8.60588 11.7127L7.62052 11.5423C7.54241 11.9938 7.72815 12.4437 8.09937 12.7108L8.68338 11.899ZM8.80063 11.9366C8.76099 11.9366 8.71945 11.9246 8.68053 11.897L8.10223 12.7128C8.30848 12.859 8.55171 12.9366 8.80063 12.9366V11.9366ZM8.89236 11.9132C8.86118 11.9295 8.8293 11.9366 8.80063 11.9366V12.9366C8.99261 12.9366 9.18328 12.8896 9.35577 12.7994L8.89236 11.9132ZM10.268 11.1971L8.89319 11.9128L9.35494 12.7998L10.7298 12.0841L10.268 11.1971ZM12.1017 11.9109L10.7297 11.197L10.2681 12.0841L11.6402 12.798L12.1017 11.9109ZM12.3125 11.8995C12.252 11.9434 12.1753 11.9499 12.1054 11.9128L11.6365 12.7961C12.0419 13.0112 12.529 12.9784 12.9004 12.7084L12.3125 11.8995ZM12.3929 11.7127C12.4053 11.7845 12.3779 11.8529 12.3164 11.8967L12.8965 12.7113C13.2707 12.4448 13.4564 11.9937 13.3782 11.5423L12.3929 11.7127ZM12.1298 10.1965L12.3929 11.713L13.3782 11.542L13.1151 10.0256L12.1298 10.1965Z" fill="#EAA22B" />
    </svg>
  )
}

export default RewardPointsIcon