import { Box, Stack } from "@mui/material";

const Loader = () => {
    return (
        <Box mt={8}>
            <Stack  direction="row" justifyContent='center' alignItems='center' >
                <div className="lds-ring">
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            </Stack>
        </Box>
    );
}

export default Loader;