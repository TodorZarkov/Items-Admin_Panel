export const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="pull-right hidden-xs">
                <b>Version</b> 1.0
            </div>
            <strong>Copyright &copy; {(new Date()).getUTCFullYear()} <a href="https://github.com/TodorZarkov">Items Admin Panel - Todor Zarkov</a>.</strong> All rights reserved.
        </footer>
    );
}