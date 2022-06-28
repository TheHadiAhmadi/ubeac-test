export const condition = (props) => {
    return !Object.keys(props).includes('if') || props['if'];
};
