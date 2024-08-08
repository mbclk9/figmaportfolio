export const getIconByName = (iconsArray, category, iconName) => {
    const categoryObj = iconsArray.find(iconSet => iconSet.category === category);
    return categoryObj?.icons[iconName];
}
