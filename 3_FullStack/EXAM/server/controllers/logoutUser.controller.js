const logout = async (req, res) => {
    try {
        res.clearCookie('usertoken');
        res.json({ success: true });
    } catch (e) {
        console.error(e);
        return { success: false, data: e.message };
    }
};

module.exports = logout;;