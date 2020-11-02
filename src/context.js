import React, { Component } from 'react';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: [],
        cart: [],
        modalOpen: false,
        modalProduct: [],
        productUpdating: null,
        isDisplayForm: false,
        keyword: '',
        cartSubTotal: 0,
        cartVAT: 0,
        cartTotal: 0

    }
    addTotals = () => {
        let subTotal = 0
        this.state.cart.map(item => {
            { subTotal += item.total }
        })
        const tempVAT = subTotal * 0.1
        const VAT = parseFloat(tempVAT.toFixed(2))
        const total = subTotal + VAT
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartVAT: VAT,
                cartTotal: total
            }
        })
    }
    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = parseFloat(price);
        this.setState(() => {
            return {
                products: tempProducts,
                cart: [...this.state.cart,
                    product]
            }
        }, this.addTotals);
    }
    
    onToggleForm = () => {
        if (this.state.isDisplayForm && this.state.productUpdating !== null) {
            this.setState({ isDisplayForm: true, productUpdating: null });
        }
        else {
            this.setState({ isDisplayForm: !this.state.isDisplayForm, productUpdating: null });
        }

    }

    onCloseForm = () => {
        this.setState({ isDisplayForm: false });
    }

    onShowForm = () => {
        this.setState({ isDisplayForm: true });
    }

    componentDidMount() {
        try{
            this.setProducts()
        }catch(err)
        {
            alert(err)
        }  
    }

    search = keyword => {
        this.setState({
            keyword: keyword
        })
    }

    onSearch = () => {
        if (this.state.keyword) {
            var { products } = this.state
            products.filter(product => {
                return product.name.toLowerCase().indexOf(this.state.keyword) !== -1
            })
        }
    }

    setProducts = () => {
            var storeProducts = Object.values(JSON.parse(localStorage.getItem('products')));
            let tempProducts = [];
            storeProducts.forEach(item => {
                const singleItem = { ...item };
                tempProducts = [...tempProducts, singleItem];

            })

            this.setState(() => {
                return { products: tempProducts }
            })
    }
    
    onSubmit = (data) => {
        var { products } = this.state;
        if (data.id === '') {
            data.id = this.generateID();
            products.push(data);
        }
        else {
            let tempProducts = [...this.state.products];
            const index = tempProducts.indexOf(this.getItem(data.id));
            products[index] = data;
        }
        localStorage.setItem('products', JSON.stringify(products))
        this.setState(() => {
            return { products: products, productUpdating: null };
        })
    }

    onDelete = (id) => {
        var { products } = this.state;
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        products.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(products))
        this.setState(() => {
            return { products: products };
        })
    }

    onUpdate = (id) => {
        var { products } = this.state;
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        this.onShowForm();
        this.setState(() => {
            return { productUpdating: products[index] };
        })
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product }
        })
    }

    onGenerateData = () => {
        const products = [
            {
                id: this.generateID(),
                name: "Samsung Galaxy A70",
                img: "SamsungGalaxyA70.jpg",
                price: '318',
                company: "Samsung",
                desc:
                    "Điện Thoại Samsung Galaxy A70 (128GB/6GB) - Hàng Chính Hãng (Đã Kích Hoạt) Bảo Hành 12 Tháng sản phẩm vẫn được làm bằng chất liệu nhựa giả thủy tinh nhưng là nhựa cao cấp với tên gọi 3D Graffitistic, mang đến sự cứng cáp và chắc chắn khi cầm nắm. Bên cạnh đó, màu sắc trên lưng máy được trang bị thêm hiệu ứng lấp lánh nên khi nhìn theo góc nghiêng sẽ rất đẹp mắt. Đáng tiếc là A70 vẫn bị bám mồ hôi và dấu vân tay",
                inCart: false,
                count: 0,
                total: 0
            },
            {
                id: this.generateID(),
                name: "Samsung Galaxy M10",
                img: "SamsungGalaxyM10.png",
                price: '115',
                company: "Samsung",
                desc:
                    "Màn hình: PLS TFT LCD, 6.2 inches HD+ • Hệ điều hành: Android 8.1 (Oreo) • Camera sau: Chính 13 MP & Phụ 5 MP • Camera trước: 5 MP • CPU: Exynos 7870 8 nhân 64-bit • RAM: 2 GB • Bộ nhớ trong: 16 GB • Thẻ nhớ: MicroSD • Thẻ SIM: 2 SIM Nano (SIM 2 chung khe thẻ nhớ) • Dung lượng pin: 3400 mAh",
                inCart: false,
                count: 0,
                total: 0
            },
            {
                id: this.generateID(),
                name: "Iphone X",
                img: "iphonex.jpg",
                price: '479',
                company: "Iphone",
                desc:
                    "Thiết kế lạ mắt không nút Home cứng. Điện Thoại iPhone X 64GB là chiếc điện thoại hoàn toàn mới của Apple vừa mới ra mắt tuần vừa qua. Trên cơ bản, iPhone X vẫn có những tính năng như những dòng iPhone khác nhưng thiết kế bên ngoài lạ mắt hơn, không trang bị nút Home cứng, viền kim loại sang trọng và đặc biệt là cụm camera sau được trang bị theo chiều dọc tạo điểm nhấn cho chiếc điện thoại",
                inCart: false,
                count: 0,
                total: 0
            },
            {
                id: this.generateID(),
                name: "Iphone 7 Plus",
                img: "iphone7plus.jpg",
                price: '328',
                company: "Iphone",
                desc:
                    "Thiết kế kim loại nguyên khối sang trọng Điện Thoại iPhone 7 Plus 32GB - Hàng Chính Hãng FPT với kích thước 158.2 x 77.9 x 7.3 mm mỏng nhẹ và thiết kế tương tự như bộ đôi iPhone 6s/6s Plus, tuy nhiên phần dải nhựa bắt sóng không cắt ngang mặt lưng như phiên bản cũ mà được chuyển sang phần cạnh trên của sản phẩm. Phím Home vật lý trên điện thoại cũng được thay thế bằng phím cảm ứng nhờ vào sự kết hợp Taptic Engine mới và liên kết với 3D Touch tiện lợi và đẹp mắt",
                inCart: false,
                count: 0,
                total: 0
            }
            ,
            {
                id: this.generateID(),
                name: "Iphone 11 Pro Max",
                img: "ip11promax.jpg",
                price: '1099',
                company: "Iphone",
                desc:
                    'iPhone 11 Pro Max 256GB là chiếc iPhone cao cấp nhất trong bộ 3 iPhone Apple giới thiệu trong năm 2019 và quả thực chiếc smartphone này mang trong mình nhiều trang bị xứng đáng với tên gọi "Pro"',
                inCart: false,
                count: 0,
                total: 0
            }
            ,
            {
                id: this.generateID(),
                name: "Oppo A9",
                img: "oppoa9.jpg",
                price: '307',
                company: "Oppo",
                desc:
                    "Kế thừa phiên bản OPPO A7 đã từng gây hot trước đó, OPPO A9 (2020) có nhiều sự cải tiến hơn về màn hình, camera và hiệu năng trải nghiệm.",
                inCart: false,
                count: 0,
                total: 0
            }
            ,
            {
                id: this.generateID(),
                name: "Realme 6i",
                img: "realme6i.jpg",
                price: '199',
                company: "Realme",
                desc:
                    "Tiếp nối những thành công của Realme 5i, Realme tiếp tục cho ra đời người em kế nhiệm mang tên Realme 6i với hàng loạt những cải tiến như: MediaTek Helio G80, màn hình giọt nước, 4 camera sau,… đi kèm một mức giá vô cùng hấp dẫn",
                inCart: false,
                count: 0,
                total: 0
            }
            ,
            {
                id: this.generateID(),
                name: "Xiaomi Redmi Note 9",
                img: "redminote9.jpg",
                price: '264',
                company: "Xiaomi",
                desc:
                    "Xiaomi Redmi Note 9 Pro 6GB/128GB là chiếc smartphone tầm trung mới nhất của Xiaomi gây ấn tượng với cấu hình mạnh mẽ, hệ thống bốn camera sau chất lượng, dung lượng pin khủng cùng mức giá bán cực kỳ hấp dẫn",
                inCart: false,
                count: 0,
                total: 0
            }
            
        ]
        localStorage.setItem('products', JSON.stringify(products));

    }

    s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateID() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }


    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return { modalProduct: product, modalOpen: true };
        })
    }

    closeModal = id => {
        this.setState(() => {
            return { modalOpen: false }
        })
    }

    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]
        product.count = product.count + 1
        product.total = product.count * product.price
        this.setState(() => {
            return {
                cart: [...tempCart]

            }
        }, this.addTotals)
    }

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]
        if (product.count > 1) {
            product.count = product.count - 1
        }


        product.total = product.count * product.price
        this.setState(() => {
            return {
                cart: [...tempCart]

            }
        }, this.addTotals)
    }

    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart]
        tempCart = tempCart.filter(item => item.id !== id)
        const index = tempProducts.indexOf(this.getItem(id))
        let removeProduct = tempProducts[index]
        removeProduct.inCart = false
        removeProduct.total = 0
        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            }
        }, this.addTotals)
    }

    clearCart = () => {

        this.setState(() => {
            return { cart: [] }


        }, this.setProducts, this.addTotals)


    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                onSubmit: this.onSubmit,
                onDelete: this.onDelete,
                onUpdate: this.onUpdate,
                onToggleForm: this.onToggleForm,
                onCloseForm: this.onCloseForm,
                onShowForm: this.onShowForm,
                search: this.search,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
                onGenerateData: this.onGenerateData
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };