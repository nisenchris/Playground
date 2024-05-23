import { Box, useStyleConfig } from "@chakra-ui/react";
function PanelContent(props) {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig("PanelContent", { variant });
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest}
    w={{
      base: "100%",
      xl: "75%",
    }}>
      {children}
    </Box>
  );
}

export default PanelContent;
