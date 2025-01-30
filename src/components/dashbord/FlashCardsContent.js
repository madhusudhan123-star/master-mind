import React, { useState } from 'react'
import { BiPlus, BiEdit, BiTrash, BiCloudUpload, BiPencil, BiFile, BiDotsVerticalRounded } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';

function FlashCardsContent() {
    const navigate = useNavigate();
    const [newDeckName, setNewDeckName] = useState('');
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [showDeckNamePrompt, setShowDeckNamePrompt] = useState(false);
    const [uploadedFile, setUploadedFile] = useState(null);
    const [inputMethod, setInputMethod] = useState(null);
    const [recentDecks, setRecentDecks] = useState([
        { id: 1, name: "JavaScript Basics", cardCount: 15, createdAt: "2024-01-15" },
        { id: 2, name: "React Fundamentals", cardCount: 20, createdAt: "2024-01-14" },
        { id: 3, name: "CSS Concepts", cardCount: 10, createdAt: "2024-01-13" },
    ]);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const inputOptions = [
        {
            id: 'manual',
            icon: <BiPencil className="w-8 h-8" />,
            title: 'Create Empty Deck',
            description: 'Create a new deck and add cards later'
        },
        {
            id: 'file',
            icon: <BiFile className="w-8 h-8" />,
            title: 'Upload File',
            description: 'Import cards from CSV or Excel file'
        }
    ];

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setUploadedFile(file);
            setShowDeckNamePrompt(true);
        }
    };

    const handleCreateDeck = (e) => {
        e.preventDefault();
        if (newDeckName.trim()) {
            const newDeck = {
                id: Date.now(), // temporary ID solution
                name: newDeckName,
                cardCount: uploadedFile ? 0 : 0, // This will be updated when actually processing the file
                createdAt: new Date().toISOString().split('T')[0]
            };

            // Add new deck to the beginning of the list
            setRecentDecks(prevDecks => [newDeck, ...prevDecks]);

            if (uploadedFile) {
                console.log('Creating deck from file:', newDeckName, uploadedFile);
                // Here you'll process the file and update the cardCount later
                setUploadedFile(null);
            } else {
                console.log('Creating empty deck:', newDeckName);
            }

            // Reset form state
            setNewDeckName('');
            setShowDeckNamePrompt(false);
            setInputMethod(null);
            setIsFormVisible(false);
        }
    };

    const handleOptionSelect = (optionId) => {
        setInputMethod(optionId);
        if (optionId === 'manual') {
            setShowDeckNamePrompt(true);
        }
    };

    const handleDeckAction = (action, deckId) => {
        switch(action) {
            case 'delete':
                setRecentDecks(prevDecks => prevDecks.filter(deck => deck.id !== deckId));
                break;
            case 'rename':
                // Rename logic will go here
                console.log('Rename deck:', deckId);
                break;
            case 'addCards':
                // Add cards logic will go here
                console.log('Add cards to deck:', deckId);
                break;
            default:
                break;
        }
        setActiveDropdown(null);
    };

    const handleDeckClick = (deckId, e) => {
        // Prevent click if clicking on the dots menu or its children
        if (e.target.closest('.deck-menu')) {
            return;
        }
        navigate(`/deck/${deckId}`);
    };

    return (
        <div className="space-y-8">
            {/* Create Deck Section */}
            <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">My Decks</h2>
                    {!inputMethod && !showDeckNamePrompt && (
                        <button
                            onClick={() => setIsFormVisible(!isFormVisible)}
                            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                        >
                            <BiPlus className="w-5 h-5" />
                            New Deck
                        </button>
                    )}
                </div>

                {isFormVisible && !inputMethod && !showDeckNamePrompt && (
                    <div className="grid grid-cols-2 gap-6 mt-4">
                        {inputOptions.map((option) => (
                            <div
                                key={option.id}
                                className="border-2 border-gray-200 rounded-lg p-6 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all"
                                onClick={() => handleOptionSelect(option.id)}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="text-blue-500 mb-3">{option.icon}</div>
                                    <h3 className="font-semibold mb-2">{option.title}</h3>
                                    <p className="text-sm text-gray-600">{option.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {inputMethod === 'file' && !showDeckNamePrompt && (
                    <div className="space-y-4">
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                            <BiCloudUpload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                            <input
                                type="file"
                                className="hidden"
                                id="cardFile"
                                onChange={handleFileUpload}
                                accept=".csv,.xlsx,.xls"
                            />
                            <label 
                                htmlFor="cardFile"
                                className="cursor-pointer text-blue-500 hover:text-blue-600 block mb-3"
                            >
                                Click to upload file
                            </label>
                            <p className="text-sm text-gray-500 mb-4">
                                Support formats: CSV, Excel (.xlsx, .xls)
                            </p>
                            <a href="#" className="text-blue-500 hover:text-blue-700 text-sm">
                                Download template file
                            </a>
                        </div>
                        <button
                            onClick={() => setInputMethod(null)}
                            className="w-full py-2 text-gray-600 hover:text-gray-800"
                        >
                            Back to options
                        </button>
                    </div>
                )}

                {showDeckNamePrompt && (
                    <div className="mt-4">
                        <form onSubmit={handleCreateDeck} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Deck Name</label>
                                <input
                                    type="text"
                                    value={newDeckName}
                                    onChange={(e) => setNewDeckName(e.target.value)}
                                    className="w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter deck name"
                                    required
                                />
                                {uploadedFile && (
                                    <p className="text-sm text-gray-500 mt-2">
                                        File selected: {uploadedFile.name}
                                    </p>
                                )}
                            </div>
                            <div className="flex justify-end gap-4">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowDeckNamePrompt(false);
                                        setUploadedFile(null);
                                        setInputMethod(null);
                                    }}
                                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                >
                                    Create Deck
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>

            {/* Recent Decks Section */}
            <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">Recent Decks</h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {recentDecks.map((deck) => (
                        <div 
                            key={deck.id} 
                            onClick={(e) => handleDeckClick(deck.id, e)}
                            className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-medium text-gray-800 hover:text-blue-600">
                                    {deck.name}
                                </h4>
                                <div className="relative deck-menu">
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setActiveDropdown(activeDropdown === deck.id ? null : deck.id);
                                        }}
                                        className="p-1 hover:bg-gray-100 rounded-full"
                                    >
                                        <BiDotsVerticalRounded className="w-5 h-5" />
                                    </button>
                                    
                                    {/* Dropdown Menu */}
                                    {activeDropdown === deck.id && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border">
                                            <div className="py-1">
                                                <button
                                                    onClick={() => handleDeckAction('addCards', deck.id)}
                                                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                                >
                                                    <BiPlus className="w-4 h-4 mr-2" />
                                                    Add Flash Cards
                                                </button>
                                                <button
                                                    onClick={() => handleDeckAction('rename', deck.id)}
                                                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                                >
                                                    <BiEdit className="w-4 h-4 mr-2" />
                                                    Rename
                                                </button>
                                                <button
                                                    onClick={() => handleDeckAction('delete', deck.id)}
                                                    className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                                                >
                                                    <BiTrash className="w-4 h-4 mr-2" />
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-2">{deck.cardCount} cards</p>
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-400">Created: {deck.createdAt}</span>
                                {/* <button
                                    onClick={() => handleDeckAction('addCards', deck.id)}
                                    className="text-xs text-blue-500 hover:text-blue-700 flex items-center gap-1"
                                >
                                    <BiPlus className="w-4 h-4" />
                                    Add Cards
                                </button> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FlashCardsContent;