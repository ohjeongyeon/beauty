<template>
    <footer class="page-footer">
        <div class="footer-content">
            <div class="footer-section">
                <h4>About Us</h4>
                <p>We are a company dedicated to providing the best services to our customers.</p>
            </div>
            <div class="footer-section">
                <h4>Contact</h4>
                <p>Email: support@example.com</p>
                <p>Phone: +123 456 7890</p>
            </div>
            <div class="footer-section">
                <h4>Follow Us</h4>
                <p>
                    <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
                </p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'PageFooter',
};
</script>

<style scoped>
.page-footer {
    background-color: #2c3e50;
    color: white;
    padding: 20px 0;
    text-align: center;
}

.footer-content {
    display: flex;
    justify-content: space-around;
    padding: 20px 0;
}

.footer-section {
    flex: 1;
    padding: 0 20px;
}

.footer-section h4 {
    margin-bottom: 10px;
    font-size: 18px;
}

.footer-section p {
    margin: 5px 0;
}

.footer-bottom {
    border-top: 1px solid #444;
    padding-top: 10px;
    font-size: 14px;
}

.footer-section a {
    color: #1abc9c;
    text-decoration: none;
}

.footer-section a:hover {
    text-decoration: underline;
}
</style>
