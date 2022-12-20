import React from "react";
import { black, useThemeColors } from "@apitable/components";
interface EmptyContentProps {
  content: string;
}

export function defaultEmptyContent(props: EmptyContentProps) {
  const { content } = props;
  const colors = useThemeColors()
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.defaultBg,
      }}
    >
      <img
        alt="empty-image"
        src="../../../img/empty.png"
        style={{
          width: 160,
          height: 120,
        }}
      />
      <div
        style={{
          marginTop: 8,
          lineHeight: 1.5,
          color: colors.fc1,
        }}
      >
        {content}
      </div>
    </div>
  );
}
