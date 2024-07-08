import React from "react"
import { SvgIcon, type SvgIconProps } from "@mui/material"

function CreditCard(props: SvgIconProps) {
  return (
    <SvgIcon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M2.34742 3C1.05504 3 0 4.07957 0 5.40618V7.35927V9.93707V18.5938C0 19.9204 1.05504 21 2.34742 21H21.6526C22.945 21 24 19.9204 24 18.5938V9.93707V7.35927V5.40618C24 4.07957 22.945 3 21.6526 3H2.34742ZM2.34742 3.87872H21.6526C22.4855 3.87872 23.144 4.55118 23.144 5.40618V6.91819H0.856037V5.40618C0.856037 4.55118 1.51447 3.87872 2.34742 3.87872ZM0.856037 7.79691H23.144V9.49599H0.856037V7.79691ZM0.856037 10.3756H23.144V18.5938C23.144 19.4488 22.4855 20.1213 21.6526 20.1213H2.34742C1.51447 20.1213 0.856037 19.4488 0.856037 18.5938V10.3756ZM15.5516 13.0907C14.9046 13.0907 14.2837 13.3547 13.8262 13.8244C13.3687 14.294 13.1115 14.9314 13.1114 15.5955C13.1115 16.2597 13.3687 16.8971 13.8262 17.3667C14.2837 17.8363 14.9046 18.1012 15.5516 18.1013C16.0704 18.1009 16.5704 17.9283 16.9845 17.619C17.3992 17.9288 17.9006 18.1013 18.4199 18.1013C19.067 18.1013 19.6877 17.8373 20.1453 17.3676C20.6029 16.8979 20.8601 16.2598 20.8601 15.5955C20.8601 14.9313 20.6029 14.2941 20.1453 13.8244C19.6877 13.3547 19.067 13.0907 18.4199 13.0907C17.9005 13.0907 17.3992 13.263 16.9845 13.5729C16.5704 13.2637 16.0704 13.091 15.5516 13.0907ZM3.57964 13.7583C3.52263 13.757 3.46595 13.7674 3.41291 13.7889C3.35987 13.8104 3.31155 13.8425 3.27079 13.8835C3.23002 13.9244 3.19763 13.9733 3.17552 14.0272C3.1534 14.0812 3.14201 14.1391 3.14201 14.1977C3.14201 14.2562 3.1534 14.3141 3.17552 14.3681C3.19763 14.422 3.23002 14.4709 3.27079 14.5118C3.31155 14.5528 3.35987 14.5849 3.41291 14.6064C3.46595 14.6279 3.52263 14.6383 3.57964 14.637H8.96667C9.02367 14.6383 9.08036 14.6279 9.1334 14.6064C9.18644 14.5849 9.23476 14.5528 9.27552 14.5118C9.31629 14.4709 9.34868 14.422 9.37079 14.3681C9.39291 14.3141 9.4043 14.2562 9.4043 14.1977C9.4043 14.1391 9.39291 14.0812 9.37079 14.0272C9.34868 13.9733 9.31629 13.9244 9.27552 13.8835C9.23476 13.8425 9.18644 13.8104 9.1334 13.7889C9.08036 13.7674 9.02367 13.757 8.96667 13.7583H3.57964ZM15.5516 13.9694C15.849 13.9696 16.1368 14.0558 16.3851 14.214C16.3233 14.3098 16.2695 14.4102 16.2213 14.5134C16.2156 14.5257 16.2101 14.538 16.2045 14.5503C16.1118 14.7572 16.0474 14.9762 16.0123 15.2025C16.0097 15.2194 16.0071 15.2362 16.0047 15.2531C15.9894 15.3663 15.9787 15.48 15.9787 15.5955C15.9787 15.711 15.9894 15.8257 16.0047 15.9388C16.0069 15.9558 16.0095 15.9725 16.0123 15.9894C16.0474 16.2157 16.1118 16.4347 16.2045 16.6416C16.21 16.6539 16.2155 16.6662 16.2213 16.6785C16.2693 16.7813 16.3228 16.8816 16.3843 16.9771C16.1361 17.1351 15.8487 17.2215 15.5516 17.2217C15.1314 17.2216 14.7286 17.0504 14.4314 16.7454C14.1343 16.4404 13.9675 16.0269 13.9675 15.5955C13.9675 15.1641 14.1343 14.7516 14.4314 14.4465C14.7286 14.1415 15.1314 13.9695 15.5516 13.9694ZM18.4199 13.9694C18.8402 13.9694 19.2429 14.1405 19.5401 14.4457C19.8373 14.7508 20.004 15.1641 20.004 15.5955C20.004 16.027 19.8373 16.4403 19.5401 16.7454C19.2429 17.0505 18.8402 17.2225 18.4199 17.2225C17.9995 17.2225 17.5969 17.0505 17.2997 16.7454C17.2969 16.7426 17.2948 16.7396 17.2921 16.7368C17.2918 16.7362 17.2915 16.7357 17.2912 16.7351C16.9998 16.4312 16.836 16.022 16.8356 15.5955C16.836 15.1691 16.9999 14.7608 17.2912 14.4568C17.2958 14.4518 17.3003 14.4466 17.3047 14.4414C17.6014 14.1393 18.0017 13.9694 18.4199 13.9694ZM3.53868 16.1353C3.42695 16.1434 3.32275 16.196 3.24837 16.282C3.17398 16.3679 3.13533 16.4804 3.14069 16.5952C3.14604 16.71 3.19497 16.8182 3.27701 16.8964C3.35905 16.9747 3.46767 17.0169 3.57964 17.014H5.88275C5.93976 17.0153 5.99645 17.0049 6.04949 16.9834C6.10253 16.9619 6.15085 16.9298 6.19162 16.8888C6.23239 16.8479 6.26478 16.799 6.28689 16.7451C6.30901 16.6911 6.3204 16.6332 6.3204 16.5747C6.3204 16.5161 6.30901 16.4582 6.28689 16.4042C6.26478 16.3503 6.23239 16.3014 6.19162 16.2605C6.15085 16.2195 6.10253 16.1874 6.04949 16.1659C5.99645 16.1444 5.93976 16.134 5.88275 16.1353H3.57964C3.566 16.1346 3.55233 16.1346 3.53868 16.1353Z" fill="currentColor" />
    </SvgIcon>
  )
}

export default CreditCard