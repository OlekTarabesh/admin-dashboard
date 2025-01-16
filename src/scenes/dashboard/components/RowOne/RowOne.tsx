import { FC } from "react";
import { useTheme } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

import StatBox from "../../../../components/StatBox";

import { tokens } from "../../../../theme";
import { Wrapper } from "./styles";
import { IRowOneProps } from "./rowOne.types";

const RowOne: FC<IRowOneProps> = ({ title, subtitle, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Wrapper sx={{ backgroundColor: `${colors.primary[400]}` }}>
      <StatBox
        title={title}
        subtitle={subtitle}
        progress={progress}
        increase={increase}
        icon={
          <EmailIcon
            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
          />
        }
      />
    </Wrapper>
  );
};

export default RowOne;
